#ifndef JSON_H
#define JSON_H

int Json_dumpItem(char *msg, cJSON *item);
int Json_getArrSize(cJSON *item);
char *printJsonStr(cJSON *item);
int printJsonInt(cJSON *item);
float printJsonFloat(cJSON *item);
cJSON *cnJsonParseArr(char *sData, int MaxE);
cJSON *cnDecAesJsonArr(PAES DecAes, char *sData, char *Key, int MaxE);
int addJsonMsgStr(cJSON *obj, char *Msg);
int Json_addItem2Arr(cJSON *dst, cJSON *item);

#endif
