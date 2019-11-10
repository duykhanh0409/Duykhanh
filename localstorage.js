const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');



function template(data) {
    commentList.insertAdjacentHTML("beforeend", `
    <div class="comment-1 flex items-start justify-start">
        <img class="comment-avatar" src="${data.avatar}" />
        <div class="flex-1">
        
          <h3 class="comment-author">${data.author}</h3>
          <p class="comment-body">${data.comment}</p>
        </div>
      </div>
    </div>`);
}


function appendCommend(event) {
    const data = {
        avatar: "./image3/avatar.jpg",
        comment: commentInput.value,
        author: "Duy Khánh"
    }
    event.preventDefault();
    if (commentInput.value.length < 1) return;
    //insert new template into DOM
    template(data);
    commentInput.value = "";

    //save the list with local storage

    localStorage.setItem('commentListing', commentList.innerHTML);
}

submit.addEventListener('click', appendCommend, false);

const save = localStorage.getItem('commentListing');
if (save) {
    commentList.innerHTML = save;
}