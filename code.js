class Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
      this.tail = null;
      this.length = 0;
  }

  addFirst(value) {
      if (this.length === 0) {
          let newest = new Node(value, null);
          newest.next = newest;
          this.tail = newest;
      } else {
          let newest = new Node(value, this.tail.next);
          this.tail.next = newest;
      }

      this.length++;
  }

  removeFirst() {
    if (this.length === 0) {
        //Проверяем, если список пустой (длина равна нулю), то возвращаем undefined, так как нет элементов для удаления.
        return undefined;
    }

    if (this.length === 1) {

        //Если в списке только один элемент (длина равна 1), то устанавливаем this.tail (хвост) в значение null, так как список будет пустым после удаления.
        this.tail = null;

        //если в списке больше одного элемента, то переустанавливаем указатель на следующий элемент для хвоста (this.tail.next) 
        //на второй элемент списка (this.tail.next.next). Это позволяет пропустить первый (удаляемый) элемент и связать хвост со вторым элементом списка.
    } else {
        this.tail.next = this.tail.next.next;
    }

        //Уменьшаем длину списка на 1, так как удаление элемента из списка приводит к уменьшению его размера.
    this.length--;
}
}

const node1 = new Node(5, null);
const sll = new SinglyLinkedList();
sll.addFirst(5);
sll.addFirst(6);
sll.addFirst(7);
sll.removeFirst();
