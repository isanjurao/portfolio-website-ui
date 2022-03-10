import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter();
    const {slugs} = router.query;
  return (
    <div className='h-screen'>
        <div className='bg-red-700 h-fit text-black'>
    <h1 className='text-3xl'>{slugs}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eveniet beatae! Doloribus impedit nisi commodi, ipsa iste cumque totam fugit ad odit dolorum, hic soluta saepe repellendus ea id eligendi eum. Architecto suscipit velit commodi aliquam nostrum dolores molestiae, cupiditate totam dignissimos eaque, repudiandae cumque libero quas vitae perspiciatis id, accusamus voluptate minima optio. Corrupti blanditiis eos atque natus laudantium tempore, maiores voluptatibus velit sed temporibus quidem rerum. Exercitationem porro adipisci sint fuga recusandae labore ullam velit optio minima blanditiis ducimus veniam maiores, placeat soluta dignissimos ea, corporis molestiae officia eos doloribus modi asperiores. Iusto quae accusantium molestiae ratione quos. Obcaecati sequi modi hic! Sint tenetur odit cupiditate, at maxime hic delectus et officiis id nesciunt sed facilis. Assumenda, labore. Illo debitis, ipsum doloribus consequuntur tenetur alias beatae blanditiis reprehenderit. A earum minima quis et quas, obcaecati voluptatum sit eum harum animi praesentium consequuntur facilis voluptate, cupiditate voluptas ipsam assumenda atque, magnam excepturi tempora eligendi laboriosam dolorem. Exercitationem minus accusantium quibusdam cupiditate recusandae ipsum sapiente quasi sed officiis nisi excepturi commodi eveniet saepe quam, rerum eligendi architecto reprehenderit! Beatae dignissimos aut id eveniet. Quas architecto exercitationem accusantium! Adipisci sint vitae voluptatem totam tenetur doloribus at, voluptatum nemo quisquam odio? Sit.</p>
    </div>
    </div>
    
  )
}

export default slug