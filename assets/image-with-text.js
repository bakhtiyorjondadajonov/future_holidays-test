document.addEventListener('DOMContentLoaded', function () {
  const lazyVideo = document.getElementById('lazy-video');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const posterPath = entry.target.getAttribute('data-poster');
        entry.target.poster = posterPath;
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(lazyVideo);
});
