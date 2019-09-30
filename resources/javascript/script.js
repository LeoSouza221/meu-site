let select = 0;
let select_item = document.getElementById("item-select");
let i = 0;
let teste = 'VUEJS'
const button_action = {
  DOWN: () => {
    if (select === 3) {
      adjustSelectItem(select, 0);
      return;
    }
    adjustSelectItem(select, select+=1);
  },
  UP: () => {
    if (select === 0) {
      adjustSelectItem(select, 3);
      return;
    }
    adjustSelectItem(select, select-=1);
  },
  ENTER: () => {
    console.log('aki');
  }
};

const correct_id = {
  apresentation: '#apresentation',
  knowledge: '#knowledge',
  projects: '#projects',
  contacts: '#contacts',
};

function adjustButton() {
  const right = document.getElementsByClassName('right-buttons');
  for (let c = 0; c < right[0].children.length; c++) {
    right[0].children[c].children[0].href = Object.values(correct_id)[select];
  };
};

function adjustSelectItem(current, next) {
  select_item.children[current].classList.remove('selected-menu-item');
  select = next;
  select_item.children[select].classList.add('selected-menu-item');
  adjustButton();
};

function markSelectedItem(event, button_press) {
  let i = 0;
  if (!event && button_press) {
    button_action[button_press]();
    return;
  } else if (!event && !button_press) {
    select_item.children[select].classList.add('selected-menu-item');
    return;
  } else if (event.target = 'a') {
    for (i; i < select_item.children.length; i++) {
      if (event.target == select_item.children[i].firstChild) {
        adjustSelectItem(select, i);
      }
    }
    return;
  }
  for (i; i < select_item.children.length; i++) {
    if (event.target == select_item.children[i]) {
      adjustSelectItem(select, i);
    }
  }
};

select_item.addEventListener("mouseover", function(event) {
  markSelectedItem(event);
});

let buttons_left = document.addEventListener("keydown", event => {
  if (event.keyCode === 40) {
    button_action.DOWN();
    return;
  }
  if (event.keyCode === 38) {
    button_action.UP();
    return;
  }
  if (event.keyCode === 13) {
    button_action.ENTER();
    return
  }
});

window.onload = markSelectedItem();
