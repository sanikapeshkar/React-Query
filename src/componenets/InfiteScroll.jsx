import React, { useEffect } from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

// Function to fetch todos with metadata
const fetchTodos = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
    {
      params: {
        _page: pageParam, // Use pageParam to fetch different pages
        _limit: 10, // Limit the number of items per page
      },
    }
  );

  // Return the data and metadata
  return {
    todos: response.data,
    nextPage: response.data.length === 10 ? pageParam + 1 : undefined,
  };
};

const InfiniteScroll = () => {
  // Using useInfiniteQuery for infinite scrolling
  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isLoading: isInfiniteLoading,
    isError: isInfiniteError,
    error: infiniteError,
  } = useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    getNextPageParam: (lastPage) => {
      // Determine the next page number based on the metadata returned by fetchTodos
      return lastPage.nextPage;
    },
  });

  const { ref, inView } = useInView({
    threshold: 1.0, // Trigger when the sentinel is fully in view
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage(); // Fetch the next page when the sentinel is in view
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div>
      {isInfiniteLoading && <p>Loading more todos...</p>}
      {isInfiniteError && <p>Error: {infiniteError.message}</p>}

      {/* Display the todos */}
      {infiniteData && (
        <ul>
          {infiniteData.pages
            .flatMap((page) => page.todos)
            .map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          {/* Sentinel element to trigger infinite scroll */}
          <div ref={ref} style={{ height: "1px" }}></div>
        </ul>
      )}
    </div>
  );
};

export default InfiniteScroll;
