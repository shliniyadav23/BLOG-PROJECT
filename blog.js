

// // document.addEventListener('DOMContentLoaded', function() {
// //     const postForm = document.getElementById('post-form');
// //     const postsContainer = document.getElementById('posts-container');
// //     const filterBtn = document.getElementById('filter-btn');
// //     const filterCategory = document.getElementById('filter-category');

// //     // Load posts from local storage
// //     let posts = JSON.parse(localStorage.getItem('posts')) || [];

// //     // Function to save posts to local storage
// //     function savePosts() {
// //         localStorage.setItem('posts', JSON.stringify(posts));
// //     }

// //     // Function to render posts
// //     function renderPosts(postsToRender) {
// //         postsContainer.innerHTML = '';

// //         postsToRender.forEach((post, index) => {
// //             const postDiv = document.createElement('div');
// //             postDiv.className = 'post';
// //             postDiv.innerHTML = `
// //                 <h3>${post.title}</h3>
// //                 <p>${post.content}</p>
// //                 <p><strong>Category:</strong> ${post.category}</p>
// //                 <div class="likes-comments">
// //                     <button class="like-btn" data-index="${index}">Like (${post.likes})</button>
// //                     <button class="comment-btn" data-index="${index}">Comment</button>
// //                 </div>
// //                 <div class="comments">
// //                     ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
// //                 </div>
// //             `;
// //             postsContainer.appendChild(postDiv);
// //         });

// //         // Add event listeners for like and comment buttons
// //         document.querySelectorAll('.like-btn').forEach(button => {
// //             button.addEventListener('click', function() {
// //                 const index = this.getAttribute('data-index');
// //                 posts[index].likes++;
// //                 savePosts();
// //                 renderPosts(posts);
// //             });
// //         });

// //         document.querySelectorAll('.comment-btn').forEach(button => {
// //             button.addEventListener('click', function() {
// //                 const index = this.getAttribute('data-index');
// //                 const comment = prompt('Enter your comment:');
// //                 if (comment) {
// //                     posts[index].comments.push(comment);
// //                     savePosts();
// //                     renderPosts(posts);
// //                 }
// //             });
// //         });
// //     }

// //     // Handle form submission
// //     postForm.addEventListener('submit', function(e) {
// //         e.preventDefault();
// //         const title = document.getElementById('title').value;
// //         const content = document.getElementById('content').value;
// //         const category = document.getElementById('category').value;

// //         const newPost = {
// //             title,
// //             content,
// //             category,
// //             likes: 0,
// //             comments: []
// //         };

// //         posts.push(newPost);
// //         savePosts();
// //         renderPosts(posts);

// //         // Clear the form
// //         postForm.reset();
// //     });

// //     // Handle filter by category
// //     filterBtn.addEventListener('click', function() {
// //         const category = filterCategory.value.toLowerCase();
// //         const filteredPosts = posts.filter(post => post.category.toLowerCase() === category);
// //         renderPosts(filteredPosts);
// //     });

// //     // Initial render
// //     renderPosts(posts);
// // });





// document.addEventListener('DOMContentLoaded', function() {
//     const postForm = document.getElementById('post-form');
//     const postsContainer = document.getElementById('posts-container');
//     const filterBtn = document.getElementById('filter-btn');
//     const filterCategory = document.getElementById('filter-category');

//     // Load posts from local storage
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];

//     // Function to save posts to local storage
//     function savePosts() {
//         localStorage.setItem('posts', JSON.stringify(posts));
//     }

//     // Function to render posts
//     function renderPosts(postsToRender) {
//         postsContainer.innerHTML = '';

//         postsToRender.forEach((post, index) => {
//             const postDiv = document.createElement('div');
//             postDiv.className = 'post';
//             postDiv.innerHTML = `
//                 <h3>${post.title}</h3>
//                 <p>${post.content}</p>
//                 <p><strong>Category:</strong> ${post.category}</p>
//                 <div class="likes-comments">
//                     <button class="like-btn" data-index="${index}">Like (${post.likes})</button>
//                     <button class="comment-btn" data-index="${index}">Comment</button>
//                     <button class="delete-btn" data-index="${index}">Delete</button> <!-- Delete button added -->
//                 </div>
//                 <div class="comments">
//                     ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
//                 </div>
//             `;
//             postsContainer.appendChild(postDiv);
//         });

//         // Add event listeners for like, comment, and delete buttons
//         document.querySelectorAll('.like-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.getAttribute('data-index');
//                 posts[index].likes++;
//                 savePosts();
//                 renderPosts(posts);
//             });
//         });

//         document.querySelectorAll('.comment-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 const index = this.getAttribute('data-index');
//                 const comment = prompt('Enter your comment:');
//                 if (comment) {
//                     posts[index].comments.push(comment);
//                     savePosts();
//                     renderPosts(posts);
//                 }
//             });
//         });

//         document.querySelectorAll('.delete-btn').forEach(button => { // Delete button functionality
//             button.addEventListener('click', function() {
//                 const index = this.getAttribute('data-index');
//                 const confirmDelete = confirm('Are you sure you want to delete this post?');
//                 if (confirmDelete) {
//                     posts.splice(index, 1); // Remove the post from the array
//                     savePosts();
//                     renderPosts(posts);
//                 }
//             });
//         });
//     }

//     // Handle form submission
//     postForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const title = document.getElementById('title').value;
//         const content = document.getElementById('content').value;
//         const category = document.getElementById('category').value;

//         const newPost = {
//             title,
//             content,
//             category,
//             likes: 0,
//             comments: []
//         };

//         posts.push(newPost);
//         savePosts();
//         renderPosts(posts);

//         // Clear the form
//         postForm.reset();
//     });

//     // Handle filter by category
//     filterBtn.addEventListener('click', function() {
//         const category = filterCategory.value.toLowerCase();
//         const filteredPosts = posts.filter(post => post.category.toLowerCase() === category);
//         renderPosts(filteredPosts);
//     });

//     // Initial render
//     renderPosts(posts);
// });




document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Load posts from local storage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Function to save posts to local storage
    function savePosts() {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    // Function to render posts
    function renderPosts(postsToRender) {
        postsContainer.innerHTML = '';

        postsToRender.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Category:</strong> ${post.category}</p>
                <div class="likes-comments">
                    <button class="like-btn" data-index="${index}">Like (${post.likes})</button>
                    <button class="comment-btn" data-index="${index}">Comment</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
                <div class="comments">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            `;
            postsContainer.appendChild(postDiv);
        });

        // Add event listeners for like, comment, and delete buttons
        document.querySelectorAll('.like-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                posts[index].likes++;
                savePosts();
                renderPosts(posts);
            });
        });

        document.querySelectorAll('.comment-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const comment = prompt('Enter your comment:');
                if (comment) {
                    posts[index].comments.push(comment);
                    savePosts();
                    renderPosts(posts);
                }
            });
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const confirmDelete = confirm('Are you sure you want to delete this post?');
                if (confirmDelete) {
                    posts.splice(index, 1);
                    savePosts();
                    renderPosts(posts);
                }
            });
        });
    }

    // Handle form submission
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const category = document.getElementById('category').value;

        const newPost = {
            title,
            content,
            category,
            likes: 0,
            comments: []
        };

        posts.push(newPost);
        savePosts();
        renderPosts(posts);

        postForm.reset();
    });

    // Handle filter by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category').toLowerCase();
            if (category === 'all') {
                renderPosts(posts);
            } else {
                const filteredPosts = posts.filter(post => post.category.toLowerCase() === category);
                renderPosts(filteredPosts);
            }
        });
    });

    // Initial render
    renderPosts(posts);
});



