#ifndef __LIST_H__
#define __LIST_H__

typedef struct ListEntry_t {
    void *Data;
    struct ListEntry_t *Next;
    struct ListEntry_t *Prev;
    struct List_t *List;
} ListEntry_t;

typedef struct List_t {
    int Count;
    pthread_mutex_t Mutex;
    ListEntry_t *Head;
    ListEntry_t *Tail;
} List_t;

typedef int (List_Apply_H)(ListEntry_t *Le, void *Arg);

void List_init(List_t *List);
void List_append(List_t *List, ListEntry_t *Le, void *Data);
void List_unlink(ListEntry_t *Le);
void List_flush(List_t *List);
ListEntry_t *List_apply(List_t *List, int Fwd, List_Apply_H *Ah, void *Arg);
ListEntry_t *List_Le_init();

#endif
