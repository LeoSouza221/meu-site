let button_left_1;
let button_left_2;
let button_left_3;
let button_left_4;
let select = 0;
let select_item = document.getElementById("item-select");
let i = 0;

function adjustSelectItem(current, next) {
  select_item.children[current].classList.remove('selected-menu-item');
  select = next;
  select_item.children[select].classList.add('selected-menu-item');
}

const button_action = {
  DOWN: () => {
    console.log('aki')
    if (select === 3) {
      console.log('aki');
      adjustSelectItem(select, 0);
      return;
    }
    console.log('naoi');
    adjustSelectItem(select, select+=1);
  },
  UP: () => {
    if (select === 0) {
      adjustSelectItem(select, 3);
      return;
    }
    adjustSelectItem(select, select-=1);
  },
};

function markSelectedItem(event, button_press) {
  let i = 0;
  if (!event && button_press) {
    button_action[button_press];

    return;
  } else if (!event && !button_press) {
    select_item.children[select].classList.add('selected-menu-item');
    return;
  }
  // if (event.target.nodeName = select_item.children[select].nodeName) {
  for (i; i < select_item.children.length; i++) {
    if (event.target == select_item.children[i]) {
      adjustSelectItem(select, i);
    }
  }
  // }
}

select_item.addEventListener("mouseover", function(event) {
  markSelectedItem(event);
});

window.onload = markSelectedItem();
