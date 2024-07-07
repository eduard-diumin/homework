const urlPosts = 'https://jsonplaceholder.typicode.com/posts/';
const urlComments = 'https://jsonplaceholder.typicode.com/comments/?postId=';

function fetchPostById(id) {
    return new Promise((resolve, reject) => {
        fetch(`${urlPosts}${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(post => resolve(post))
        .catch(error => reject(error))
    })
}

function fetchPostCommentsById(id) {
    return new Promise((resolve, reject) => {
        fetch(`${urlComments}${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(comments => resolve(comments))
        .catch(error => reject(error))
    })
}

function showPost(title, text, id) {
    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    h4.textContent = title;
    li.appendChild(h4);
    let p = document.createElement('p');
    p.textContent = text;
    li.appendChild(p);
    let btn = document.createElement('button');
    btn.className = 'comment-btn';
    btn.textContent = 'Show comments'
    btn.dataset.id = id;
    li.appendChild(btn);
    document.querySelector('#postList').appendChild(li);
}

function showComments(name, comment) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let h5 = document.createElement('h5');
    h5.textContent = name;
    li.appendChild(h5);
    let p = document.createElement('p');
    p.textContent = comment;
    li.appendChild(p);
    ul.appendChild(li);
    return ul
}


document.querySelector('#fetchPost').addEventListener('click', () => {
    const postId = document.querySelector('#postId').value;
    if (postId < 1 || postId > 100) {
        alert('Invalid number, ID must be between 1 and 100');
        return;
    }
    fetchPostById(postId)
    .then(post => {
        showPost(post.title, post.body, post.id)
    })
    .catch(error => {
        console.error(error);
        alert('Error fetching post: ' + error.message);
    })
})


document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('comment-btn')) {
        let id = event.target.dataset.id;
        fetchPostCommentsById(id)
        .then(comment => {
            comment.forEach(element => {
                event.target.closest('li').appendChild(showComments(element.name, element.body));
            });
        })
        .catch(error => {
            console.error(error);
            alert('Error fetching comments: ' + error.message);
        })
    }
});