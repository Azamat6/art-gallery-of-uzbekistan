import React, { useState, useEffect } from "react";

interface Post {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string; // Сделаем thumbnailUrl необязательным
  title: string;
  author: string;
  year: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Блокировка прокрутки при открытии модального окна
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Очистка стилей при размонтировании компонента
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [selectedPost]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          {/* Перенос обработчика клика на изображение */}
          <div className="post-img-container">
            <img
              src={post.thumbnailUrl || post.imageUrl}
              alt={post.title}
              loading="lazy"
              onClick={() => setSelectedPost(post)}
            />
          </div>
          <h3>{post.title}</h3>
          <div className="post-info">
            <p>{post.author}</p>
            <p>{post.year}</p>
          </div>
        </div>
      ))}

      {/* Модальное окно */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Предотвращаем всплытие клика
          >
            <button
              className="close-button"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>
            {/* Отображаем полноразмерное изображение */}
            <div className="modal-img-container">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
