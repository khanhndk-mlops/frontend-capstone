import Dish from './Dish'
import beef from '../assets/images/beef.jpg'
import rice from '../assets/images/rice.jpg'
import sushi from '../assets/images/sushi.jpg'

export default function Specials() {
    return (
        <article className="container">
            <h1>Specials</h1>
            <div className="specials">
                <Dish title="Sauté Diced Beef" image={beef}>
                    A french-inspired dish of wok-seared cubed steak that’s been marinated in a soy-based sauce then
                    quickly sauteed with garlic, onion, and butter.
                </Dish>
                <Dish title="Dolsot Bibimbap" image={rice}>
                    One of the most well-known and beloved Korean dishes. It served in a sizzling hot stone bowl. Once
                    served, you mix them all together nicely and shove them into your mouth
                </Dish>
                <Dish title="Crab Sesame Sushi" image={sushi}>
                    Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety
                    of ingredients, such as crab, sesame and vegetables.
                </Dish>
            </div>
        </article>
    )
}