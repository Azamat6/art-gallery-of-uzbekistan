import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LocalizedText {
  ru: string;
  en: string;
  uz: string;
}

interface Post {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  title: LocalizedText;
  author: LocalizedText;
  year: string;
  category: string;
}


interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "ru" | "en" | "uz";

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
              alt={post.title[lang]}
              loading="lazy"
              onClick={() => setSelectedPost(post)}
            />
          </div>
          <h3>{post.title[lang]}</h3>
          <div className="post-info">
            <p>{post.author[lang]}</p>
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
                alt={selectedPost.title[lang]}
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
