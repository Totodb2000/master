/*List operations

Implementare le seguenti funzioni che operano sulle liste:

●	concat(list1, list2): concatena due liste
●	inserimento in testa
●	inserimento in coda
●	rimozione in testa
●	stampa
●	length che ritorna la lunghezza della lista



Tutte le funzioni non devono modificare le liste o i valori passati come argomento.*/
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

struct Node{
	int data;
	struct Node *next;
};
typedef struct Node node;

int length(node *testa){
	int result=0;
	node *tmp=testa;
	
	while(tmp!=NULL){
		result++;
		tmp=tmp->next;
	}
	
	return result;
}

node *concat(node *testa1, node *testa2) {
    node *testa3 = malloc(sizeof(node));

    if (testa3 != NULL) {
        *testa3 = *testa1;
        node *tmp3 = testa3;
        node *tmp1 = testa1;

        // Trova l'ultimo elemento della lista testa3
        while (tmp3->next != NULL) {
            tmp3 = tmp3->next;
        }

        // Copia gli elementi della lista testa2 in testa3
        node *tmp2 = testa2;
        while (tmp2 != NULL) {
            tmp3->next = malloc(sizeof(node));
            tmp3->next->data = tmp2->data;
            tmp3->next->next = NULL;

            tmp2 = tmp2->next;
            tmp3 = tmp3->next;
        }
    }

    return testa3;
}

void insertBack(node **testa,int value){
	node *newNode=malloc(sizeof(node));
	if(newNode!=NULL){
		newNode->data=value;
		newNode->next=NULL;
		if(*testa==NULL){
			*testa=newNode;
		}
		else{
			node *currentPtr=*testa;
			while(currentPtr->next!=NULL){
				currentPtr=currentPtr->next;
			}
			currentPtr->next=newNode;
		}
	}
}

//funzione inserimento in testa
void insertHead(node **testa,int value){
	node *newNode=malloc(sizeof(node));
	if(newNode != NULL) {
        newNode->data = value;
        newNode->next = *testa;
        *testa = newNode;
    }	
}

//funzione che stampa la lista
void stampa(node *testa){
	node *tmp=testa;
	if(tmp==NULL){
		printf("La lista è vuota");
	}
	else{
		while(tmp!=NULL){
			printf("%d\t",tmp->data);
			tmp=tmp->next;
		}
		printf("\n");
	}
}

void pop(node **testa){
	
	if(*testa!=NULL){
	    node *tmp=*testa;
	    *testa=(*testa)->next;
	    free (tmp);
	}

}

void removeBack(node **testa){
	if(*testa!=NULL){
		 if ((*testa)->next == NULL) {
            free(*testa);
            *testa = NULL;
        } else {
            node *tmp = *testa;
            while (tmp->next->next != NULL) {
                tmp = tmp->next;
            }
            free(tmp->next);
            tmp->next = NULL;
        }
	}
}

int main(void){
	srand(time(NULL));
	node *testa1=NULL;
	node *testa2=NULL;
	int dim1,dim2;
	
	printf("Quanti numeri deve contenere la lista1:");
	scanf("%d",&dim1);
	for(int i=0;i<dim1;i++){
		int value=rand()%100-1;
		insertHead(&testa1,value);
	}
	
	printf("lista 1:");
	stampa(testa1);
	int l1=length(testa1);
	printf("la lista 1 ha lunghezza:%d\n",l1);
	pop(&testa1);
	stampa(testa1);
	
	printf("Quanti numeri deve contenere la lista2:");
	scanf("%d",&dim2);
	for(int i=0;i<dim2;i++){
		int value=rand()%100-1;
		insertBack(&testa2,value);
	}
	
	printf("lista 2:");
	stampa(testa2);
	int l2=length(testa2);
	printf("la lista 1 ha lunghezza:%d\n",l2);
	
	node *testa3=concat(testa1,testa2);
	stampa(testa3);
	
	return 0;
}

