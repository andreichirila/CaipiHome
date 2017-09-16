#ifndef __MGW_PKG_H__
#define __MGW_PKG_H__

typedef struct Pkg_t {
        int Id;
	uint16_t Seq;
        unsigned char TagId;
        int Retfd;
        void *Data;
        size_t DataSize;
        ListEntry_t *Le;
        int tries;
        int waitofack;
        uint64_t timeout;
        struct Mgw_Client_t *MgwC;
	int needack;
} Pkg_t;

int addRecvPkg(Mgw_Client_t *MgwC, unsigned char *Data, size_t DataSize);
int addSendPkg(Mgw_Client_t *MgwC, unsigned char TagId, uint16_t Seq, unsigned char *Data, size_t DataSize, int Retfd, int needack);
Pkg_t *findPkg(List_t *List, uint16_t Id);

int createRecvPkgThread(Mgw_Client_t *MgwC);
int createSendPkgThread(Mgw_Client_t *MgwC);



#endif
