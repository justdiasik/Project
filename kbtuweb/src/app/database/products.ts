import{ProductInterface} from './productInterface';

export const items: ProductInterface[] = [

//     {
//       id: 1,
//       category_id: 1,
//       time: '0 hour 5 mins',
//       name: 'Microwave shakshuka',
//       description: 'Whip up shakshuka, a Middle Eastern favourite, in just 10 minutes. Perfect for brunch, lunch or supper, its healthy and a great option for a budget meal',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/01/microwave-shakshuka.jpg',
//       rating: '4.0',
//       ingredients: [
//         '1 tbsp olive oil','200ml passata or canned tomatoes, whizzed to a paste','1 garlic clove, finely sliced','1 heaped tbsp red pepper salsa (we used Gran Luchito) or ¼-½ red pepper, chopped','1 medium egg','1 tbsp chopped coriander and pitta bread, to serve'
//           ],
//       methods:[
//         'Brush a microwave bowl or dish with a little of the oil. Stir the passata, garlic and salsa together and season well. Tip into the bowl and make a dip in the centre. Break in the egg, then prick the yolk with the tip of a sharp knife.',
//         'Cover the bowl with its lid or clingfilm. Microwave on high for 1 min, and then in 20 sec bursts until the white is set. Scatter over the coriander and serve with the warmed pitta.'
//       ]
//       //Bakosta
//     },
//     {
//       id: 2,
//       category_id: 1,
//       name: 'Chorizo hummus bowl',
//       time: '0 hour 15 mins',
//       description: 'Add chorizo and kale to hummus for a dish thats packed with protein and flavour. Drizzle over olive oil and serve with flatbread to make lunch for one',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/01/gf_hummuschorizo.jpg?itok=zwe8kbP5',
//       rating: '4.0',
//       ingredients: [
//         '400g can chickpeas','2 tbsp olive oil','¼ lemon, juiced','1-2 small cooking chorizo, chopped','2 handfuls chopped kale','flatbread, to serve'
//           ],
//       methods:[
//         'Warm the chickpeas in a microwave or frying pan in their liquid. Drain and reserve the liquid. Tip half the chickpeas into a small food processor with 1 tbsp oil, the lemon juice and a splash of the liquid from the tin and whizz to a paste. Season.'
//         ,'Put the chorizo in a small frying pan and cook over a low heat until it starts to release its oils, then turn up the heat and continue cooking until the chorizo starts to crisp. Add the remaining chickpeas and stir for a couple of mins. Stir in the kale and cook until it wilts.',
//         'Spoon the warm hummus into a bowl and tip the chorizo, chickpeas and kale on top. Drizzle over the remaining oil, season well and serve with flatbread for scooping up.'
//       ]
//     },
//     {
//       id: 3,
//       category_id: 1,
//       name: 'Super-quick sesame ramen',
//       time: '0 hour 15 mins',
//       description: 'Rustle up this warming veggie ramen in just 15 minutes. Think of it as healthy fast food – its low-fat, low-calorie and low-cost as well',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/01/super-quick-sesame-ramen.jpg?itok=LRVc0y1S',
//       rating: '4.8',
//       ingredients: [
//         '80g pack instant noodles (look for an Asian brand with a flavour like sesame)','2 spring onions, finely chopped',
//         '½ head pak choi',
//         '1 egg'
//         ,'1 tsp sesame seeds','chilli sauce, to serve'
//           ],
//       methods:[
//         'Cook the noodles with the sachet of flavouring provided (or use stock instead of the sachet, if you have it). Add the spring onions and pak choi for the final min.','Meanwhile, simmer the egg for 6 mins from boiling, run it under cold water to stop it cooking, then peel it. Toast the sesame seeds in a frying pan.','Tip the noodles and greens into a deep bowl, halve the boiled egg and place on top. Sprinkle with sesame seeds, then drizzle with the sauce or sesame oil provided with the noodles, and chilli sauce, if using.'

//       ]
//     },
// // ----------------------------------------------------------DESSERTS & SALAD--------------------------------------------------------------------------------------------------------------------
//     {
//       id: 4,
//       category_id: 2,
//       name: 'Quick chicken hummus bowl',
//       time: '0 hour 10 mins',
//       description: 'Make our healthy chicken and hummus salad bowl for a delicious budget lunch option. It can be thrown together in just 10 minutes and delivers three of your 5-a-day',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/quick-chicken-and-hummus-bowl.jpg?itok=O05UgNTs',
//       rating: '5.0',
//       ingredients: [
//         '200g hummus','1 small lemon, zested and juiced','200g pouch cooked mixed grains (we used Merchant Gourmet red rice & quinoa)','150g baby spinach, roughly chopped','1 small avocado, halved and sliced','1 cooked chicken breast, sliced at an angle','100g pomegranate seeds','½ red onion, finely sliced','2 tbsp toasted almonds'

//           ],
//       methods:[
//         'Mix 2 tbsp of the hummus with half the lemon juice, the lemon zest and enough water to make a drizzly dressing. Squeeze the grain pouch to separate the grains, then divide between two shallow bowls and toss through the dressing. Top each bowl with a handful of the spinach.','Squeeze the remaining lemon juice over the avocado halves, then add one half to each bowl. Divide the chicken, pomegranate seeds, onion, almonds and remaining hummus between the two bowls and gently mix everything together just before eating.'

//       ]
//     }, {
//       id: 5,
//       category_id: 2,
//       name: 'Apple & blackberry crumble',
//       time: '0 hour 35 mins',
//       description: 'Raymond Blanc pre-cooks the crumble topping to avoid gluey, uncooked crumble and retain the texture of the fruit',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--393505_11.jpg?itok=lGqo7ui4',
//       rating: '5.0',
//       ingredients: [
        // '120g plain flour','60g caster sugar','300g Braeburn apple','30g unsalted butter','115g blackberries','vanilla ice cream, to serve','60g unsalted butter at room temperature, cut into pieces'

//           ],
//       methods:[
        // 'Heat oven to 190C/170C fan/gas 5. Tip 120g plain flour and 60g caster sugar into a large bowl.','Add 60g unsalted butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy.','Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.','Meanwhile, for the compote, peel, core and cut 300g Braeburn apples into 2cm dice.','Put 30g unsalted butter and 30g demerara sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel.','Stir in the apples and cook for 3 mins. Add 115g blackberries and ¼ tsp ground cinnamon, and cook for 3 mins more.','Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.','To serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.'

//       ]
//     }, {
//       id: 6,
//       category_id: 2,
//       name: 'Apple flapjack crumble',
//       time: '0 hour 55 mins',
//       description: 'Sweetening the apples with apricot jam and orange juice makes it twice as fruity and adding a little syrup to the oaty crumble makes great little chewy clusters',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1069547_10.jpg?itok=5Rrn9J-5',
//       rating: '5.0',
//       ingredients: [
        // '1.1kg eating apples, such as Coxes','3-4 tbsp apricot jam','juice 1 large orange',  '100g plain flour','1 tbsp golden syrup','100g light muscovado sugar'

//           ],
//       methods:[
        // 'Heat oven to 190C/fan 170C/gas 5. Peel, core and thinly slice the apples and mix with the jam and orange juice. Spread evenly over a buttered 1.5-litre ovenproof dish, not too deep.','Mix the oats, flour and cinnamon in a large bowl. Add the butter in small chunks and rub in gently. Stir in the sugar and rub in again. Drizzle over the syrup, mixing with a knife so it forms small clumps. Sprinkle evenly over the apples and bake for 30-35 mins until the juices from the apples start to bubble up. Cool for 10 mins, then serve with custard, cream or ice cream.'

//       ]
//     },
// // ----------------------------------------------------------EASY--------------------------------------------------------------------------------------------------------------------

//     {
//       id: 7,
//       category_id: 3,
//       name: 'Cherry bruschetta',
//       time: '0 hour 15 mins',
//       description: 'Ripe sweet cherries, creamy ricotta and salty prosciutto combine beautifully on these little toasts - the perfect nibble for a summer party',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/06/cherry-bruschettas.jpg?itok=BHMj3ngZ',
//       rating: '5.0',
//       ingredients: [
        // '1 loaf ciabatta','extra virgin olive oil','100g ricotta','ne12 cherriesw','ne80g prosciuttow'

//           ],
//       methods:[
        // 'Heat the grill to its highest setting. Cut the ciabatta into 12 slices, then brush each slice on both sides, with a little extra virgin olive oil. Grill the bread for 2 mins each side.','Spread over the ricotta. Pit and halve the cherries and arrange them on top of the bruschetta with the prosciutto. Drizzle over some more olive oil to serve.'

//       ]
//     }, {
//       id: 8,
//       category_id: 3,
//       name: 'Glazed salmon with green bean & bulgur salad',
//       time: '0 hour 25 mins',
//       description: 'SomFresh citrus flavours turn a salmon fillet into a special mealetext',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--285494_12.jpg?itok=TmzCrN2L',
//       rating: '4.0',
//       ingredients: [
        // '140g bulgur wheat','1 tbsp olive oil','2 skinless salmon fillets','6 spring onions','juice and zest ½ lemon','1 tbsp clear honey','juice 1 orange','200g trimmed fine green beans'
//       ],
//       methods:[
        // 'Cook the bulgur wheat following pack instructions. Heat the olive oil in a frying pan over a medium heat. Add the salmon fillets and cook for 3 mins on each side. Stir in the spring onions and cook for 1 min. Add lemon juice, honey, orange juice and zest to the pan and bubble for 1 min more to make a sauce.','Meanwhile, boil the green beans for 4 mins or until tender. Drain. Stir the bulgur wheat with a fork, mixing in the green beans, lemon zest and a little of the sauce. Serve the salmon on a bed of bulgur and beans, with the rest of the sauce spooned over.'

//       ]
//     }, {
//       id: 9,
//       category_id: 3,
//       name: 'Chicken stuffed with herby mascarpone',
//       time: '0 hour 25 mins',
//       description: 'This super-quick and special recipe for two is bound to become a My Good Food favourite',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--160495_11.jpg?itok=v-Jq_AGd',
//       rating: '5.0',
//       ingredients: [
        // '3 tbsp mascarpone','1 tbsp finely chopped rosemary','1 garlic clove, crushed','2 chicken breasts, skin on','4 slices prosciutto','nsplash olive oilew','juice of half a lemon'

//           ],
//       methods:[
        // 'Heat oven to 200C/fan 180C/gas 6. Mix the mascarpone with the rosemary, garlic and seasoning. Place the chicken breasts on a board and lift, but don’t detach, the skin. Put a spoonful of the mascarpone mix under the skin of each breast. Wrap 2 slices of prosciutto around each, as neatly and tightly as you can, to keep the filling enclosed.','Heat a non-stick frying pan, add the olive oil and quickly brown the chicken on both sides. Transfer to a roasting tin, then finish off in the oven for 15-20 mins until just cooked.','Add the lemon juice to the roasting tin and stir over the heat, scraping off any crispy bits. Spoon the juices over the chicken and serve with potatoes and green beans.'

//       ]
//     }, 
// // ----------------------------------------------------------HARD--------------------------------------------------------------------------------------------------------------------
//     {
//       id: 10,
//       category_id: 5,
//       name: 'BuPea & broad bean shakshukarger',
//       time: '1 hour 50 mins',
//       description: 'We’ve turned a classic brunch shakshuka dish into more of a sharing main course by adding seasonal spring vegetables like peas, broad beans and asparagus',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/pea-shakshuka.jpg?itok=5NcdTvZx',
//       rating: '5.0',
//       ingredients: [
        // '1 bunch asparagus spears','200g sprouting broccoli','2 tbsp olive oil','2 spring onions, finely sliced','2 tsp cumin seeds','large pinch cayenne pepper, plus extra to serve','4 ripe tomatoes, chopped','1 small pack parsley, finely chopped','50g shelled peas','50g podded broad beans','4 large eggs','50g pea shoots','Greek yogurt and flatbreads'

//           ],
//       methods:[
        // 'Trim or snap the woody ends of the asparagus and finely slice the spears, leaving the tips and about 2cm at the top intact. Finely slice the broccoli in the same way, leaving the heads and about 2cm of stalk intact. Heat the oil in a frying pan. Add the spring onions, sliced asparagus and sliced broccoli, and fry gently until the veg softens a little, then add the cumin seeds, cayenne, tomatoes (with their juices), parsley and plenty of seasoning, and stir. Cover with a lid and cook for 5 mins to make a base sauce, then add the asparagus spears, broccoli heads, peas and broad beans, cover again and cook for 2 mins.','Make 4 dips in the mixture. Break an egg into each dip, arrange half the pea shoots around the eggs, season well, cover with a lid and cook until the egg whites are just set. Serve with the rest of the pea shoots, a spoonful of yogurt and some flatbreads, and sprinkle over another pinch of cayenne, if you like.'

//       ]
//     }, {
//       id: 11,
//       category_id: 5,
//       name: 'BuGreek roast lamb',
//       time: '2 hour 0 mins',
//       description: 'If spring is in the air you dont want to be slaving over a hot oven, so make the most of seasonal lamb the easy way with this lazy roast',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035742_11.jpg?itok=3GgK-2kL',
//       rating: '5.0',
//       ingredients: [
        // '1 large leg of lamb, about 3kg/6lb 8oz','6 garlic cloves','1 bunch oregano','zest and juice 1 lemon','6 tbsp olive oil','1½ kg new potatoes','400g can chopped tomato','large handful pitted baby kalamata olives'

//           ],
//       methods:[
        // 'Heat oven to 240C/fan 220C/gas 9. Pound the garlic, half the oregano, lemon zest and a pinch of salt in a pestle and mortar, then add the lemon juice and a drizzle of olive oil. Stab the lamb all over with a sharp knife, then push as much of the herb paste as you can into the holes.','Tip the potatoes into a large roasting tin, then toss in the remaining olive oil and any remaining herb paste. Nestle the lamb amongst the potatoes, roast for 20 mins, then reduce the temperature to 180C/fan 160C/gas 4. Roast for 1 hr 15 mins for medium-rare, adding another 15 mins if you prefer your lamb medium. Baste the lamb once or twice with the juices and toss the potatoes. When the lamb is done to your liking, remove from the tin and let it rest. Throw the rest of the oregano in with the potatoes, scoop from the tin and keep warm.','Place the roasting tin over a medium flame, add the canned tomatoes and olives to the pan juices, then simmer for a few mins. Serve the lamb with the potatoes and sauce and a simple salad.'

//       ]
//     },{
//       id: 12,
//       category_id: 5,
//       name: 'Chicken pasta bake',
//       time: '1 hour 15 mins',
//       description: 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad',
//       image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/01/chicken_pasta_bake.jpg?itok=3u5ZUexj',
//       rating: '5.0',
//       ingredients: [
        // '4 tbsp olive oil','1 onion, finely chopped','2 garlic cloves, crushed','¼ tsp chilli flakes','2 x 400g cans chopped tomatoes','1 tsp caster sugar','6 tbsp mascarpone','4 skinless chicken breasts','300g penne','70g mature cheddar, grated','50g grated mozzarella','½ small bunch of parsley, finely chopped'

//           ],
//       methods:[
        // 'Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone. ','Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through. ','Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling. '

//       ]
//     }
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */