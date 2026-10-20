import { useState, useEffect } from 'react';

function useProjects(allProjects, delay = 300) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Todos');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const categories = ['Todos', 'React', 'Bootstrap'];


  const visibleProjects = category === 'Todos'
      ? allProjects
      : allProjects.filter((project) => project.category === category);

  return { loading, category, setCategory, categories, visibleProjects };
}

export default useProjects;