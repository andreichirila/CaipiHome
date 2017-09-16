#ifndef AES_H
#define AES_H

#define AES_MSG_LEN    	16 
#define AES_KEY_LEN		128//192
	
#define ROUNDUP(n, a)   ((n + (a - 1)) & ~(a - 1))

typedef struct _AES {
	int debug;
	int Nb;                         /* The number of columns comprising a state in AES. This is a constant in AES. Value=4 */
	int Nr;                         /* The number of rounds in AES Cipher. It is simply initiated to zero. The actual value is recieved in the program. */
	int Nk;                         /* The number of 32 bit words in the key. It is simply initiated to zero. The actual value is recieved in the program. */
	unsigned char in[AES_MSG_LEN];  /* in - it is the array that holds the plain text to be encrypted. */
	unsigned char out[AES_MSG_LEN]; /* out - it is the array that holds the key for encryption. */
	unsigned char state[4][4];      /* state - the array that holds the intermediate results during encryption. */
	unsigned char RoundKey[240];    /* The array that stores the round keys. */
	unsigned char Key[AES_KEY_LEN]; /* The Key input to the AES Program */
	int inlen;
} AES, *PAES;

#ifdef __cplusplus
extern "C"{
#endif

PAES AesCreate(int Nr);
int AesSetKey(PAES pAes, unsigned char* Key, int KeyLen);
int AesSetIn(PAES pAes, unsigned char* In, int InLen);
void AesKeyExpansion(PAES pAes);
void AesInvCipher(PAES pAes);
int AesDump(PAES pAes);
int AesGenRandIn(PAES pAes, int KeyLen);
void AesCipher(PAES pAes);
int AesSetIn2(PAES pAes, unsigned char* In, int InLen);
int AesFree(PAES pAes);

char* AesEncDataStr2HexStr(PAES EncAes, char *Data, unsigned char *Key);
char* AesDecHexStrData2Hex(PAES EncAes, char *Data, unsigned char *Key);

unsigned char* AesEncData(PAES EncAes, unsigned char *Data, size_t Datalen, unsigned char *Key);
unsigned char *AesDecData(PAES DecAes, unsigned char *Data, size_t Datalen, unsigned char *Key);

#if 0
char *HwAesEncDataStr2HexStr(char *Data, int fd);
int HwAesEncData2File(int aesfd, unsigned char *data, FILE *outfile, size_t datasize);
int HwAesEncFile(int aesfd, FILE *infile, FILE *outfile, size_t infilesize);
#endif


#ifdef __cplusplus
}
#endif

#endif //  AES_H
