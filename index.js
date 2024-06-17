/*Task 1 */
const inputElement = document.getElementById('inputId');
const buttonInput = document.getElementById('buttonId');
buttonInput.textContent = inputElement.value;
buttonInput.style.width='30px';
buttonInput.style.height='10px';
/*Task 2 */
const imageId = document.getElementById('image')
imageId.style.width='300px'
imageId.style.height="300px"
imageId.src="https://www.zdnet.com/a/img/resize/9738cb7325ce228e9029cb8a0a454e9e0828a22b/2022/09/05/c70fdeec-fd32-4d1c-96fe-d5dfe2f63da4/img-1001.jpg?auto=webp&width=1280"
imageId.alt="catNew"
/*Task 3 */
const searchElement = document.querySelector('a')
searchElement.href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwisjLOF4d-GAxX8CaIDHbJmCZ0YABAAGgJsZQ&ase=2&gclid=CjwKCAjwmrqzBhAoEiwAXVpgohA4SdpQxRVRcvhSFCVWT94vvul4kLiMMDXk-6iqwDkmWxPOjKmWyRoCda8QAvD_BwE&ohost=www.google.com&cid=CAESVuD2b-g4eIQf7sgF6C1pLpO5va-XHGUxS7lxv1hpNlV-JmVBAtTpXzXrGiSP8GopDZpRq2pDG5pG9D640DHvf1GHidk3xXZnCQV19NmIHqH-3tShEvjQ&sig=AOD64_3g6eiVrX5uFPEdlVTsmJi1ldASgQ&q&nis=4&adurl&ved=2ahUKEwjp3K2F4d-GAxX0ExAIHZzEBLoQ0Qx6BAgGEAE"
console.log(searchElement)
/*Task 4 */
const searchElementnew = document.getElementById('menu')
const firstItem = searchElementnew.querySelector('li:first-child');
firstItem.textContent="Англійська мова"








