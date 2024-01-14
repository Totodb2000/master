#include<iostream>
#include<cstdlib>
#include<ctime>


class Node{
    private:

    int data;
    Node *next;
    Node *prev;

    friend class ListNode;
    
    public:
      Node(int value):data(value),next(nullptr),prev(nullptr){}

};

class ListNode{
    private:

    Node *head;
    Node *tail;

    public:

    ListNode():head(nullptr),tail(nullptr){}

    void push(int value){
        Node *newNode=new Node(value);

        if(head==nullptr){
            head=tail=newNode;
        }
        else{
            head->prev=newNode;
            newNode->next=head;
            head=newNode;
        }
    }



    void addBack(int value){
        Node *newNode=new Node(value);
        if(tail==nullptr){
            tail=head=newNode;
        }
        else{
            tail->next=newNode;
            newNode->prev=tail;
            tail=newNode;
        }
    }

    void pop(){
    }

    void removeBack();

    void print(){
        if(head==nullptr){
            std::cout<<"la lista è vuota"<<std::endl;
        }
        else{
            Node *tmp=head;
            while (tmp!=nullptr){
                std::cout<<tmp->data<<" ";
                tmp=tmp->next;
            }
        }
        std::cout<<std::endl;
    }

    void printback(){
        if(tail==nullptr){
            std::cout<<"la lista e' vuota"<<std::endl;
        }
        else{
            Node *tmp=tail;
            while (tmp!=nullptr){
                std::cout<<tmp->data<<" ";
                tmp=tmp->prev;
            }
        }
    }

};

void istruzioni(){
    std::cout<<"Premi 1 per inserire un elemento in testa"<<std::endl;
    std::cout<<"Premi 2 per inserire un elemento in coda"<<std::endl;
    std::cout<<"Premi 3 per stampare la lista"<<std::endl;
    std::cout<<"Premi 4 per stampare la lista invertita"<<std::endl;
    std::cout<<"Premi -1 per terminare"<<std::endl;
}

int main(void){
    srand(time(nullptr));
    int dim,value,scelta;
    ListNode lista;

    istruzioni();
    std::cin>>scelta;
    while(scelta!=-1){
        switch (scelta)
        {
        case 1:
        std::cout<<"Inserisci valore da inserire in testa:";
        std::cin>>value;
        lista.push(value);
        break;
        case 2:
        std::cout<<"Inserisci valore da inserire in coda:";
        std::cin>>value;
        lista.addBack(value);
        break;
        case 3:
        lista.print();
        break;
        case 4:
        lista.printback();
        break;
        default:
        std::cout<<"Scelta non valida";
        break;
        }
        istruzioni();
        std::cin>>scelta;
    }
    return 0;
}
