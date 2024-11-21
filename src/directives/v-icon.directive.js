export default {
    created(el, binding) {
  
      const icon = document.createElement('i');
  
      icon.classList.add('fa', `fa-${binding.value.icon}`);
   
      if (binding.value.position === 'left') {
          el.insertBefore(icon, el.firstChild);
      } else if (binding.value.position === 'right') {
          el.appendChild(icon);
        }
    },
  
    updated(el, binding) {
      const icon = el.querySelector('i');
  
      icon.className = '';
  
      icon.classList.add('fa', `fa-${binding.value.icon}`);
      },
  
    beforeUnmount(el) {
      const icon = el.querySelector('i');
  
      if (icon) {
         icon.remove();
      }
    }
  
  };