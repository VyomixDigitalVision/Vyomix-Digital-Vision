// Counter animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // total animation time in ms
      const startTime = performance.now();
  
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
  
        counter.textContent = target === 200 ? `${value}%` : `${value}+`;
  
        if (progress < 1) requestAnimationFrame(update);
      };
  
      requestAnimationFrame(update);
    });
  }); 
   