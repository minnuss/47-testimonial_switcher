const tesimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const img = document.querySelector('.user-image img')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonialsArray = [
    {
        name: 'Brooklyn Cooper',
        position: 'Marketing',
        photo: "https://api.randomuser.me/portraits/women/62.jpg",
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi natus explicabo nisi perferendis, obcaecati iure? Dignissimos natus adipisci laborum eligendi cumque tempora quia sit maxime neque cupiditate animi laboriosam error porro cum dolorum incidunt iure illum expedita, eius facere!',
    },

    {
        name: 'Miro Jutila',
        position: 'Sales',
        photo: "https://api.randomuser.me/portraits/men/62.jpg",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora velit explicabo ipsum eos praesentium incidunt aspernatur quod vel delectus dolore possimus facere at accusantium quae architecto fuga doloremque nobis iure tenetur, repellendus atque magnam optio culpa iusto? Earum, nostrum consequatur!',
    },

    {
        name: 'Emy Roger',
        position: 'CEO',
        photo: "https://api.randomuser.me/portraits/women/32.jpg",
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dolore nihil, ipsa, delectus aliquam error ratione reprehenderit possimus dolorum velit eveniet itaque quibusdam asperiores.',
    },

    {
        name: 'Curtis Cook',
        position: 'Data Entry',
        photo: "https://api.randomuser.me/portraits/men/12.jpg",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium exercitationem eligendi, dolores ipsum perferendis, cupiditate ullam maxime quas, nemo nesciunt doloremque tempora vero magnam nulla. Cupiditate ipsa odit odio laboriosam dolorum provident.',
    },
]

let activeIdx = 0

function updateTestimonial() {

    let { name, position, photo, text } = testimonialsArray[activeIdx]

    testimonial.innerHTML = text
    img.src = photo
    username.innerHTML = name
    role.innerHTML = position


    activeIdx++
    if (activeIdx > testimonialsArray.length - 1) {
        activeIdx = 0;
    }
}


setInterval(() => {
    updateTestimonial()
}, 15000); //if time needs to change, update the animation duration in css also

updateTestimonial()