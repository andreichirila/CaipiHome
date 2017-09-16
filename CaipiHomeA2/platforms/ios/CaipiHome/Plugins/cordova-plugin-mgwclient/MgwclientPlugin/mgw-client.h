#ifndef __MGW_CLIENT_H__
#define __MGW_CLIENT_H__

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <unistd.h>
#include <sys/types.h>
#include <stdint.h>
#include <pthread.h>
#include <semaphore.h>

#if __APPLE__ 
#import <dispatch/dispatch.h>
#endif

#include "mgw-client-list.h"
#include "mgw-client-aes.h"
#include "mgw-client-cjson.h"
#include "mgw-client-json.h"


#define FREE(x) if(x){ free(x); x = NULL; }
#define FREE_JSON(x) if(x){ cJSON_Delete(x); x = NULL; }

#define MGW_URL "mgw.cameronet.com/mgw/v1"

#define BIN_HEADER_MAGIC  0x1BA359A

enum { 
	MGW_CMD_AUTH_LOGOUT = 0,
	MGW_CMD_AUTH_SINGLE_REQ_DEVICE = 1,
	MGW_CMD_AUTH_SINGLE_REQ_USER = 2,
	MGW_CMD_WAITOF_SERVER_REQ = 7,
	MGW_CMD_WACKUP = 8,
	MGW_CMD_CHANNEL_RECV = 9,
	MGW_CMD_CHANNEL_SEND = 10
};

enum { 
	MGW_AUTH_STATE_NOLOGIN = 0,
	MGW_AUTH_STATE_LOGIN = 1
};

enum { 
	MGW_CHANNEL_STATE_NO = 0,
	MGW_CHANNEL_STATE_PROGRESSING = 1,
	MGW_CHANNEL_STATE_DONE = 2,
	MGW_CHANNEL_STATE_RESTING = 3
};

enum { 
	MGW_CHANNEL_TAG_STATE_NO = 0,
	MGW_CHANNEL_TAG_STATE_PROGRESSING = 1,
	MGW_CHANNEL_TAG_STATE_DONE = 2,
};

enum { 
	MGW_TARGET_TYPE_SERVER = 1,
	MGW_TARGET_TYPE_CENTRAL = 2,
	MGW_TARGET_TYPE_USERID = 3,
	MGW_TARGET_TYPE_DEVID = 4,
	MGW_TARGET_TYPE_DEVMAC = 5
};

enum { 
    MGW_CHANNEL_TAG_TYP_CTL = 0,
    MGW_CHANNEL_TAG_TYP_PFW_UDP = 2,
    MGW_CHANNEL_TAG_TYP_PFW_TCP = 3,
    MGW_CHANNEL_TAG_TYP_MSG = 4
};

typedef struct Mgw_Auth_t {
    	pthread_mutex_t Mutex;
	PAES EncAes;
	PAES DecAes;
	unsigned char State;
	unsigned char AuthMode;
	unsigned char NextAKey[16];
	unsigned char DataKey[16];
	char SNextAKey[34];

	int32_t CustomerId;
	unsigned char CustomerKey[16];
	int32_t AppId;
	unsigned char AppKey[16];
	char *UniIdent;
	char *Ident;
	char *IdentKey;
} Mgw_Auth_t;

typedef struct Mgw_Session_t {
	char *Id;
	char *ResponseData;
	char *UserAgent;
	int useCa;
} Mgw_Session_t;

typedef struct Mgw_ServerReq_t {
    pthread_mutex_t Mutex;
    pthread_attr_t recvThreadAttr;
    pthread_t recvThread;
    int Run;
	char *ResponseData;
} Mgw_ServerReq_t;

typedef struct Mgw_Channel_Thread_t {
    pthread_mutex_t Mutex;
    pthread_attr_t Attr;
    pthread_t Thread;
	PAES Aes;

    sem_t sem;
    sem_t sem2;

    int Run;
    size_t SendBytes;
	unsigned char *ResponseData;
    unsigned char *Data;
    size_t Datalen;
    int Timeout;
} Mgw_Channel_Thread_t;

typedef struct Mgw_Channel_t {
    int Count;
    int RecvState;
    int SendState;
    int TagState;
    unsigned char LastTagId;
    Mgw_Channel_Thread_t Recv;
    Mgw_Channel_Thread_t Send;
    Mgw_Channel_Thread_t Keepalive;
} Mgw_Channel_t;

typedef struct Mgw_Target_t {
    unsigned char DstTyp;
    uint64_t Dst;
} Mgw_Target_t;

typedef struct Mgw_ListEntry_t {
    void *Data;
    struct Mgw_ListEntry_t *Next;
    struct Mgw_ListEntry_t *Prev;
} Mgw_ListEntry_t;

typedef struct Mgw_ListHead_t {
    int Count;
	pthread_mutex_t Mutex;
    Mgw_ListEntry_t *Begin;
    Mgw_ListEntry_t *End;
} Mgw_ListHead_t;


typedef struct Mgw_Client_t {
	Mgw_Auth_t AuthData;
    int FirstStart;
	Mgw_Session_t Session;
    Mgw_ServerReq_t ServerReq;
    Mgw_Channel_t Channel;
    Mgw_ListHead_t RegTagTyps;
    Mgw_ListHead_t RecvTagIds;
    Mgw_Target_t Target;
   	uint64_t DevMac; 
    int Fdconn;
	char *localcentralip;
} Mgw_Client_t;


typedef struct Mgw_BinData_Header_t {
    uint32_t Magic;
    unsigned char TagId;
    uint32_t Size;
    uint16_t Seq;
    uint32_t Crc;
} Mgw_BinData_Header_t;

typedef struct Mgw_BinData_Ctl_Cc_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    unsigned char DstTyp;
    unsigned char TagTyp;
    uint64_t Dst;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Cc_t;

typedef struct Mgw_BinData_Ctl_Acc {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    uint16_t Aseq;
    unsigned char TagId;
    unsigned char TagTyp;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Acc;

typedef struct Mgw_BinData_Ctl_Dc_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    unsigned char TagId;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Dc_t;

typedef struct Mgw_BinData_Ctl_Acd {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    uint16_t Aseq;
    unsigned char TagId;
    unsigned char TagTyp;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Acd;

typedef struct Mgw_BinData_Ctl_Nak {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    uint16_t Aseq;
    uint32_t ErrorCode;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Nak;

typedef struct Mgw_BinData_Ctl_Pong {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    uint16_t Aseq;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Pong;

typedef struct Mgw_BinData_Ctl_Rst_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Rst_t;

typedef struct Mgw_BinData_Ctl_Start_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Start_t;

typedef struct Mgw_BinData_Ctl_Keepalive_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Keepalive_t;

typedef struct Mgw_BinData_Ctl_Auth_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    int Typ;
} __attribute__ ((packed)) Mgw_BinData_Ctl_Auth_t;

typedef struct Mgw_BinData_Ctl_AuthAck_t {
    Mgw_BinData_Header_t Header;
    uint32_t Cmd;
    uint16_t Aseq;
    uint32_t ErrorCode;
} __attribute__ ((packed)) Mgw_BinData_Ctl_AuthAck_t;


typedef struct Mgw_TagTyp_t {
    unsigned char Typ;
    void* (*OpenFunc)(Mgw_Client_t *MgwC, unsigned char TagId, void *Userdata);
    void* (*CloseFunc)(Mgw_Client_t *MgwC, unsigned char TagId, void *Userdata);
    void* (*RecvFunc)(Mgw_Client_t *MgwC, Mgw_BinData_Header_t *Header, void *Data, void *Userdata);
    void* (*ErrorFunc)(Mgw_Client_t *MgwC, unsigned char TagId, uint64_t ErrorCode, void *Userdata);
    void *Userdata;
    //struct Mgw_RegTagTyp_t *next;
} Mgw_TagTyp_t;

typedef struct Mgw_TagId_t {
    unsigned char Id;
    unsigned char Typ;
    uint16_t Seq;
    int Conns[sizeof(uint16_t)];
} Mgw_TagId_t;

//mgw-client.c
int MgwC_setlocalcentralip(Mgw_Client_t *MgwC, char *localcentralip);
int MgwC_setDefault(Mgw_Client_t *MgwC);
int MgwC_Customer_set(Mgw_Client_t *MgwC, uint64_t CustomerId, char *Key);
int MgwC_App_set(Mgw_Client_t *MgwC, uint64_t AppId, char *Key);
int MgwC_Auth_set(Mgw_Client_t *MgwC, unsigned char AuthMode, char *Ident, char *Key);
int MgwC_setKeepalive(Mgw_Client_t *MgwC, int Keepalive);
int MgwC_Auth_setState(Mgw_Client_t *MgwC, unsigned char State);
unsigned char MgwC_Auth_getState(Mgw_Client_t *MgwC);
int MgwC_Target_set(Mgw_Client_t *MgwC, unsigned char DstTyp, uint64_t Dst);
int MgwC_Wackup(Mgw_Client_t *MgwC);
unsigned char MgwC_Channel_TagId_create(Mgw_Client_t *MgwC, unsigned char ChannelTyp, void *UserData);
int Mgw_Channel_sendData(Mgw_Client_t *MgwC, unsigned char TagId, uint16_t Seq, char *Data, size_t Datalen);
int Mgw_Channel_TagId_destroy(Mgw_Client_t *MgwC, unsigned char TagId);
int Mgw_Channel_Tag_Typ_CallBackFunc_register(Mgw_Client_t *MgwC, unsigned char TagTyp, void *OpenFunc, void *CloseFunc, void *RecvFunc, void *ErrorFunc);
Mgw_TagTyp_t *Mgw_findTagTyp(Mgw_Client_t *MgwC, unsigned char Typ);
int MgwC_doAuth(Mgw_Client_t *MgwC);

Mgw_TagId_t *Mgw_findTagId(Mgw_Client_t *MgwC, unsigned char Id);
int Mgw_Channel_TagId_register(Mgw_Client_t *MgwC, unsigned char TagId, unsigned char TagTyp);
int Mgw_Channel_TagId_unregister(Mgw_Client_t *MgwC, unsigned char TagId);
int Mgw_Channel_getRecvState(Mgw_Client_t *MgwC);
int Mgw_Channel_waitofRecvStateDone(Mgw_Client_t *MgwC);
int Mgw_Channel_getSendState(Mgw_Client_t *MgwC);
int Mgw_Channel_waitofSendStateDone(Mgw_Client_t *MgwC);
void Mgw_Channel_setSendState(Mgw_Client_t *MgwC, int State);
int Mgw_Channel_getTagState(Mgw_Client_t *MgwC);
void Mgw_Channel_setTagState(Mgw_Client_t *MgwC, int State);
int Mgw_Channel_waitofTagStateDone(Mgw_Client_t *MgwC);
int MgwC_sendAuthAck(Mgw_Client_t *MgwC, int ASeq, char *Data, size_t Datalen);
int MgwC_Channel_TagId_remove(Mgw_Client_t *MgwC, unsigned char TagId);
int MgwC_setUniIdent(Mgw_Client_t *MgwC, char *Ident);
uint64_t MgwC_getDevMac(Mgw_Client_t *MgwC);

int sendKeepalive(Mgw_Client_t *MgwC);


int MgwC_init(Mgw_Client_t *MgwC);
int MgwC_init1(Mgw_Client_t *MgwC);
int MgwC_uninit(Mgw_Client_t *MgwC);

//str.c
int str2hex(char *in, unsigned char *out, int len);
int hex2str(unsigned char *in, unsigned char *out, int len);
char *strUnique(const char *seed);
char *strCatf(char *dest, const char *Format, ...);
uint64_t convMacStr2Uint64(char *MacStr);
char *srCpy(char *dst, size_t size, const char *src);
char *strLower(char *str);
char *strReplace(const char *mode, char *srcstr, const char *tokstr, const char *word);

//hash.c
char *hashMd5Str(const void *data, size_t nbytes);

//encode.c
char *hexEncode(const void *bin, size_t size);
size_t hexDecode(char *str);

//serverreq.c
int createServerReqWaitThread(Mgw_Client_t *MgwC);
int distroyServerReqWaitThread(Mgw_Client_t *MgwC);

//channel.c
int createChannelThread(Mgw_Client_t *MgwC);
int createRecvChannelThread(Mgw_Client_t *MgwC);
int createSendChannelThread(Mgw_Client_t *MgwC);
int distroyRecvChannelThread(Mgw_Client_t *MgwC);
int distroySendChannelThread(Mgw_Client_t *MgwC);
int createKeepaliveChannelThread(Mgw_Client_t *MgwC);

uint32_t string2uint32(char *buf);
void uint32_t2string(uint32_t x, char *buf);


//netserver.c
int Net_getMacAddr(unsigned char *MacAddr, char *eth);
int CN_create_tcp_socket(int port);
int CN_tcp_server_accept(int listen_fd);
int CN_check_tcp_socket(int fd, Mgw_Client_t *MgwC, unsigned char TagId);
int tcp_connect(char *ip, int port);
int udp_connect(char *ip, int port);
int CN_create_udp_socket(int port);
int CN_check_udp_socket(int fd, Mgw_Client_t *MgwC, unsigned char TagId);

//portfordwarding.c
int MgwC_PortFordwarding(Mgw_Client_t *MgwC, int localport);
int MgwC_PortFordwardingUdp(Mgw_Client_t *MgwC, int localport);
int MgwC_PortFordwardingUdp2(Mgw_Client_t *MgwC);

//datareq.c
void DataReq_setPort(int port);
void DataReq_setIpAddr(char *IpAddr);
void *DataReq_sendDataf(char *DBSessionId, char *scmd, const char *format, ...);

int printCount(Mgw_Client_t *MgwC);

void mgwtest();
int mgwtest2(Mgw_Client_t *MgwC, char *username , char *password);
int mgwtest3(Mgw_Client_t *MgwC, void *RecvFunc);
int mgwtest4(Mgw_Client_t *MgwC, void *RecvFunc);
int Mgw_reconnect(Mgw_Client_t *MgwC);

typedef struct _strSplit {
        int count;
        int max;
        int offset[255];
        char dem;
        char *wbuf;
} StrSplit;

int strSplit2offsets(const char* buf, StrSplit *split);

#include "mgw-client-pkg.h"

#endif
