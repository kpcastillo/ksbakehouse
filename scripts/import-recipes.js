const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'recipes.db'));

const recipes = [
  // ── Buttercream_floristics - recipe.pdf ──────────────────────────────────
  {
    title: 'Buttercream Glaze for Flowers (Malinovka)',
    description: 'A soft, glossy buttercream glaze used to finish sugar flowers. Sets firm enough to hold petal shape.',
    category: 'other',
    ingredients: [
      '100 g butter, room temperature',
      '200 g powdered sugar, sifted',
      '1–2 tbsp heavy cream',
      '1 tsp vanilla extract',
      'Gel food coloring (optional)',
    ],
    instructions: [
      'Beat butter on medium speed until pale and fluffy, about 3 minutes.',
      'Add powdered sugar one third at a time, mixing on low between additions.',
      'Add vanilla and 1 tbsp cream; beat on medium-high until smooth.',
      'Add more cream, a teaspoon at a time, until a spreadable glaze consistency is reached.',
      'Tint with gel food coloring as desired.',
      'Use immediately to coat or glaze finished sugar flowers.',
    ],
  },

  // ── Cakes by cliff buttercream.pdf ───────────────────────────────────────
  {
    title: 'Charlotte Cream',
    description: 'A light, bavarian-style cream made with custard and whipped cream. Used as a cake filling.',
    category: 'other',
    ingredients: [
      '4 egg yolks',
      '80 g sugar',
      '250 ml whole milk',
      '10 g gelatin sheets, bloomed in cold water',
      '250 ml heavy cream, cold',
      '1 tsp vanilla extract',
    ],
    instructions: [
      'Whisk egg yolks and sugar until pale.',
      'Heat milk to a simmer, then slowly pour over the yolk mixture while whisking.',
      'Return to saucepan over medium heat, stirring constantly, until mixture coats the back of a spoon (82 °C).',
      'Remove from heat. Squeeze water from gelatin sheets and stir into the hot custard until dissolved.',
      'Add vanilla. Strain through a fine-mesh sieve. Cool over an ice bath until mixture begins to set around the edges.',
      'Whip heavy cream to soft peaks.',
      'Fold whipped cream into the cooled custard base in two additions.',
      'Use immediately as a cake filling, or refrigerate for up to 24 hours.',
    ],
  },
  {
    title: "Cliff's 3x3 Swiss Meringue Buttercream",
    description: 'A silky Swiss meringue buttercream with a balanced butter-to-meringue ratio. Pipes and smooths beautifully.',
    category: 'other',
    ingredients: [
      '3 egg whites (about 90 g)',
      '180 g granulated sugar',
      '270 g unsalted butter, softened and cut into cubes',
      '1 tsp vanilla extract',
      'Pinch of salt',
    ],
    instructions: [
      'Combine egg whites and sugar in the bowl of a stand mixer. Set bowl over a pot of simmering water (bain-marie).',
      'Whisk constantly until sugar is fully dissolved and mixture reaches 71 °C (160 °F).',
      'Transfer bowl to the stand mixer fitted with the whisk attachment. Beat on high until stiff, glossy peaks form and the bowl is cool to the touch (about 8–10 min).',
      'Switch to the paddle attachment. With the mixer on medium, add butter one cube at a time, waiting until each piece is incorporated.',
      'The mixture may look curdled — keep mixing. It will come together into a smooth buttercream.',
      'Add vanilla and salt. Beat on medium-high for 1–2 more minutes until fluffy and smooth.',
      'Use immediately or refrigerate. Re-whip before using if chilled.',
    ],
  },

  // ── Cinnamon Rolls.pdf ───────────────────────────────────────────────────
  {
    title: 'Cinnamon Rolls with Cream Cheese Frosting',
    description: 'Soft, fluffy cinnamon rolls with a generous cinnamon-sugar filling and tangy cream cheese frosting.',
    category: 'pastries',
    servings: 12,
    prep_time: 30,
    cook_time: 25,
    ingredients: [
      // dough
      '240 ml whole milk, warm (43 °C / 110 °F)',
      '7 g (2¼ tsp) active dry yeast',
      '100 g granulated sugar, divided',
      '2 eggs, room temperature',
      '80 g unsalted butter, melted',
      '1 tsp salt',
      '480–540 g all-purpose flour',
      // filling
      '80 g unsalted butter, softened',
      '200 g brown sugar, packed',
      '2½ tbsp ground cinnamon',
      // frosting
      '115 g cream cheese, softened',
      '60 g unsalted butter, softened',
      '180 g powdered sugar, sifted',
      '1 tsp vanilla extract',
      '2–3 tbsp heavy cream',
    ],
    instructions: [
      'In a large bowl whisk warm milk, yeast, and 1 tbsp of the sugar. Let sit 5 minutes until foamy.',
      'Add remaining sugar, eggs, melted butter, and salt. Stir to combine.',
      'Add flour gradually until a soft, slightly tacky dough forms. Knead 6–8 minutes until smooth and elastic.',
      'Place dough in a greased bowl, cover, and let rise in a warm place until doubled, about 1 hour.',
      'Punch down dough and roll into a 30×45 cm rectangle on a lightly floured surface.',
      'Spread softened butter over the dough. Mix brown sugar and cinnamon; sprinkle evenly over the butter.',
      'Roll dough tightly from the long side into a log. Cut into 12 equal rolls.',
      'Arrange rolls in a greased 23×33 cm baking pan. Cover and let rise 30–45 minutes until puffy.',
      'Preheat oven to 175 °C (350 °F). Bake 22–25 minutes until golden.',
      'Beat cream cheese and butter until smooth. Mix in powdered sugar, vanilla, and enough cream for a spreadable consistency.',
      'Spread frosting over warm rolls. Serve immediately.',
    ],
  },

  // ── Glossy Buttercream.pdf ───────────────────────────────────────────────
  {
    title: 'Glossy Buttercream (Italian Meringue Style)',
    description: 'A shiny, stable buttercream made with hot sugar syrup poured into whipped egg whites. Great for decorating.',
    category: 'other',
    ingredients: [
      '200 g granulated sugar',
      '60 ml water',
      '4 egg whites (120 g)',
      '300 g unsalted butter, room temperature, cubed',
      '1 tsp vanilla extract',
    ],
    instructions: [
      'Combine sugar and water in a small saucepan. Cook over medium heat without stirring until syrup reaches 118 °C (244 °F).',
      'Meanwhile, beat egg whites in a stand mixer on medium until soft peaks form.',
      'With the mixer running, carefully pour the hot syrup down the side of the bowl in a thin, steady stream.',
      'Increase speed to high and beat until the meringue is stiff, glossy, and the bowl is cool to the touch (about 10 min).',
      'Switch to the paddle attachment. Add butter one cube at a time on medium speed, mixing until fully incorporated.',
      'Add vanilla. Beat on medium-high 2 minutes until smooth and glossy.',
      'Use immediately or store at room temperature up to 2 days. Re-whip before use.',
    ],
  },

  // ── chantyflex cream.pdf ─────────────────────────────────────────────────
  {
    title: 'Chantyflex Cream',
    description: 'A stabilized whipped cream with a light, airy texture that holds its shape without weeping. Ideal for piping and cake decoration.',
    category: 'other',
    ingredients: [
      '500 ml heavy whipping cream, cold',
      '50 g powdered sugar, sifted',
      '1 tsp vanilla extract',
      '5 g gelatin powder, dissolved in 2 tbsp cold water',
    ],
    instructions: [
      'Bloom gelatin in cold water for 5 minutes, then microwave for 10 seconds to dissolve. Cool slightly.',
      'Whip cold heavy cream on medium speed until it starts to thicken.',
      'Add powdered sugar and vanilla. Continue whipping on medium-high.',
      'When cream reaches soft peaks, drizzle in the dissolved gelatin while continuing to whip.',
      'Whip until stiff peaks form. Do not overwhip.',
      'Use immediately to pipe or spread, or refrigerate for up to 48 hours.',
    ],
  },

  // ── Homemade marshmallows.pdf ────────────────────────────────────────────
  {
    title: 'Homemade Marshmallows',
    description: 'Fluffy, melt-in-your-mouth marshmallows made from scratch. Can be made in vanilla, strawberry, or chocolate flavor.',
    category: 'other',
    servings: 20,
    ingredients: [
      '3 packets (21 g total) unflavored gelatin',
      '180 ml cold water, divided',
      '400 g granulated sugar',
      '240 ml light corn syrup',
      '¼ tsp salt',
      '1 tbsp vanilla extract (or 1 tsp strawberry extract or 2 tbsp cocoa powder for variations)',
      'Powdered sugar and cornstarch, for coating',
    ],
    instructions: [
      'Combine gelatin with 90 ml cold water in the bowl of a stand mixer. Let bloom for at least 5 minutes.',
      'In a saucepan combine sugar, corn syrup, salt, and remaining 90 ml water. Cook over medium heat, stirring until sugar dissolves, then stop stirring and cook to 116 °C (240 °F).',
      'With mixer on low using the whisk attachment, slowly pour the hot syrup down the side of the bowl into the bloomed gelatin.',
      'Gradually increase speed to high and beat until the mixture is very thick, white, and tripled in volume (about 12–15 min).',
      'Add vanilla (or flavoring). Beat 1 more minute.',
      'Pour into a greased 23×33 cm pan dusted with a mixture of powdered sugar and cornstarch. Spread evenly.',
      'Dust the top with more powdered sugar mixture. Let set uncovered at room temperature at least 4 hours or overnight.',
      'Cut into squares with an oiled or powdered-sugar-coated knife. Toss pieces in powdered sugar mixture to coat.',
    ],
  },

  // ── Fast Bread Recipe - Sugar Geek Show.pdf ──────────────────────────────
  {
    title: 'Fast Bread',
    description: 'A quick-rise sandwich bread that comes together in under an hour using extra yeast and warm liquids.',
    category: 'breads',
    servings: 24,
    prep_time: 10,
    cook_time: 20,
    ingredients: [
      '240 ml whole milk, warm',
      '120 ml water, warm',
      '14 g (4½ tsp) instant yeast',
      '2 tbsp granulated sugar',
      '1 tsp salt',
      '2 tbsp unsalted butter, melted',
      '450 g bread flour',
    ],
    instructions: [
      'Combine warm milk, warm water, yeast, and sugar. Stir and let sit 5 minutes.',
      'Add melted butter and salt. Mix in flour until a smooth dough forms.',
      'Knead 5 minutes until smooth. Shape into a loaf and place in a greased 23×13 cm loaf pan.',
      'Cover and let rise in a warm place for 20–25 minutes until the dough crowns above the pan.',
      'Preheat oven to 190 °C (375 °F).',
      'Bake 20–25 minutes until golden and hollow-sounding when tapped.',
      'Cool on a rack at least 15 minutes before slicing.',
    ],
  },

  // ── Vanilla Bean Whipped Ganache with Gelatin.pdf ────────────────────────
  {
    title: 'Vanilla Bean Whipped Ganache with Gelatin',
    description: 'A light, moussey ganache stabilized with gelatin. Pipes beautifully and holds its shape as a cake filling or topping.',
    category: 'other',
    ingredients: [
      '5 g gelatin sheets, bloomed in cold water',
      '200 ml heavy cream (for heating)',
      '300 g white chocolate, finely chopped',
      '1 vanilla bean, scraped (or 1 tsp vanilla bean paste)',
      '400 ml heavy cream, cold (for whipping)',
    ],
    instructions: [
      'Bloom gelatin sheets in cold water for 5 minutes.',
      'Heat 200 ml heavy cream with vanilla bean seeds and pod until just simmering.',
      'Remove pod. Squeeze water from gelatin and stir into hot cream until dissolved.',
      'Pour hot cream over chopped white chocolate. Let sit 1 minute, then stir until completely smooth.',
      'Stir in cold 400 ml heavy cream. Mix well.',
      'Cover and refrigerate at least 4 hours or overnight until fully chilled and set.',
      'Whip the chilled mixture on medium-high speed until it holds stiff peaks. Do not overwhip.',
      'Use immediately to fill or decorate cakes.',
    ],
  },

  // ── Ganache (1).pdf ──────────────────────────────────────────────────────
  {
    title: 'Dark Chocolate Ganache for Filling',
    description: 'A rich, smooth dark chocolate ganache used as a cake or pastry filling. Stays soft and scoopable at room temperature.',
    category: 'other',
    ingredients: [
      '200 g dark chocolate (60–70% cacao), finely chopped',
      '200 ml heavy cream',
      '20 g unsalted butter, room temperature',
    ],
    instructions: [
      'Heat heavy cream in a small saucepan until it just begins to simmer.',
      'Pour hot cream over chopped chocolate. Let sit 1 minute undisturbed.',
      'Stir from the center outward until smooth and glossy.',
      'Add butter and stir until fully incorporated.',
      'Cover with plastic wrap pressed directly onto the surface. Cool to room temperature before using.',
      'For a thicker filling ganache, refrigerate 1–2 hours then stir before using.',
    ],
  },
  {
    title: 'Milk Chocolate Ganache for Filling',
    description: 'A creamy, sweet milk chocolate ganache with a softer set than dark chocolate. Perfect for filling bonbons or cakes.',
    category: 'other',
    ingredients: [
      '300 g milk chocolate, finely chopped',
      '150 ml heavy cream',
      '15 g unsalted butter, room temperature',
    ],
    instructions: [
      'Heat heavy cream in a small saucepan until just simmering.',
      'Pour over chopped milk chocolate. Let sit 1 minute.',
      'Stir from the center outward until completely smooth.',
      'Add butter and stir to combine.',
      'Cool at room temperature. Use as a filling once it reaches a pipeable, spreadable consistency.',
    ],
  },
  {
    title: 'White Chocolate Ganache for Filling',
    description: 'A delicate, sweet white chocolate ganache that sets firm. Works well as a cake filling or truffle base.',
    category: 'other',
    ingredients: [
      '400 g white chocolate, finely chopped',
      '120 ml heavy cream',
      '15 g unsalted butter, room temperature',
    ],
    instructions: [
      'Heat heavy cream in a small saucepan until just simmering.',
      'Pour over chopped white chocolate. Let sit 1 minute.',
      'Stir from the center outward until completely smooth.',
      'Add butter and stir until incorporated.',
      'Cool to room temperature, then refrigerate until firm enough to pipe or scoop.',
    ],
  },

  // ── Gansito-Cookie-Recipe.pdf ────────────────────────────────────────────
  {
    title: 'Gansito Marbled Roll-Out Cookies',
    description: 'Marbled shortbread-style roll-out cookies combining two flavors: strawberry (pink) and Abuelita chocolate-cinnamon (brown). Inspired by the Mexican Gansito snack cake.',
    category: 'cookies',
    ingredients: [
      // Strawberry dough
      '230 g unsalted butter, room temperature',
      '200 g granulated sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '1 tsp strawberry extract',
      'Pink gel food coloring',
      '480 g all-purpose flour',
      '1 tsp baking powder',
      '½ tsp salt',
      // Abuelita (chocolate-cinnamon) dough
      '230 g unsalted butter, room temperature',
      '200 g granulated sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '60 g cocoa powder',
      '1 tsp ground cinnamon',
      '420 g all-purpose flour',
      '1 tsp baking powder',
      '½ tsp salt',
    ],
    instructions: [
      'Make strawberry dough: cream butter and sugar until fluffy. Beat in eggs, vanilla, strawberry extract, and pink gel coloring.',
      'Whisk together flour, baking powder, and salt; mix into butter mixture until a dough forms. Wrap and refrigerate 30 minutes.',
      'Make Abuelita dough: cream butter and sugar. Beat in eggs and vanilla. Whisk flour, cocoa, cinnamon, baking powder, and salt; mix in until combined. Wrap and refrigerate 30 minutes.',
      'Roll each dough into a thin sheet. Lay one on top of the other, then roll together into a log or stack and cut to create a marbled effect.',
      'Roll marbled dough to about 6 mm thickness. Cut into desired shapes.',
      'Place on parchment-lined baking sheets. Refrigerate 15 minutes.',
      'Preheat oven to 175 °C (350 °F). Bake 10–12 minutes until edges are just set.',
      'Cool on pan 5 minutes, then transfer to a rack.',
    ],
  },
  {
    title: 'Strawberry Roll-Out Cookies',
    description: 'Pink strawberry-flavored cut-out cookies with a tender, buttery texture. Great for decorating.',
    category: 'cookies',
    ingredients: [
      '230 g unsalted butter, room temperature',
      '200 g granulated sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '1 tsp strawberry extract',
      'Pink gel food coloring',
      '480 g all-purpose flour',
      '1 tsp baking powder',
      '½ tsp salt',
    ],
    instructions: [
      'Beat butter and sugar together until light and fluffy, about 3 minutes.',
      'Add eggs, vanilla, strawberry extract, and food coloring; mix until combined.',
      'Whisk flour, baking powder, and salt. Add to butter mixture and mix until a dough forms.',
      'Divide dough, flatten into discs, wrap in plastic, and refrigerate at least 1 hour.',
      'Preheat oven to 175 °C (350 °F).',
      'Roll dough to 6 mm thickness on a lightly floured surface. Cut into shapes.',
      'Bake 10–12 minutes until edges are lightly golden.',
      'Cool completely before decorating.',
    ],
  },
  {
    title: 'Abuelita Roll-Out Cookies (Chocolate Cinnamon)',
    description: 'Chocolate-cinnamon cut-out cookies inspired by Abuelita Mexican hot chocolate. Rich flavor with a classic roll-out texture.',
    category: 'cookies',
    ingredients: [
      '230 g unsalted butter, room temperature',
      '200 g granulated sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '60 g cocoa powder, sifted',
      '1 tsp ground cinnamon',
      '420 g all-purpose flour',
      '1 tsp baking powder',
      '½ tsp salt',
    ],
    instructions: [
      'Beat butter and sugar until light and fluffy.',
      'Add eggs and vanilla; mix until combined.',
      'Whisk together flour, cocoa, cinnamon, baking powder, and salt. Add to butter mixture and mix until a dough forms.',
      'Flatten into discs, wrap in plastic, and refrigerate at least 1 hour.',
      'Preheat oven to 175 °C (350 °F).',
      'Roll dough to 6 mm thickness. Cut into shapes and place on parchment-lined baking sheets.',
      'Bake 10–12 minutes until set.',
      'Cool completely before decorating.',
    ],
  },

  // ── Stuffed cookies.pdf ──────────────────────────────────────────────────
  {
    title: 'Caramel Stuffed Chocolate Cookies',
    description: 'Thick, fudgy chocolate cookies stuffed with a gooey soft caramel center. Best eaten slightly warm.',
    category: 'cookies',
    servings: 15,
    prep_time: 20,
    cook_time: 13,
    ingredients: [
      '230 g dark chocolate, melted',
      '115 g unsalted butter',
      '200 g granulated sugar',
      '100 g brown sugar',
      '3 eggs',
      '1 tsp vanilla extract',
      '200 g all-purpose flour',
      '30 g cocoa powder',
      '1 tsp baking powder',
      '½ tsp salt',
      '15 soft caramel candies or homemade caramel, chilled into discs',
    ],
    instructions: [
      'Melt chocolate and butter together over a bain-marie or in the microwave. Let cool slightly.',
      'Whisk sugars into the chocolate mixture, then whisk in eggs one at a time and vanilla.',
      'Fold in flour, cocoa, baking powder, and salt until just combined. Dough will be soft.',
      'Refrigerate dough 30–60 minutes until scoopable.',
      'Preheat oven to 175 °C (350 °F). Line baking sheets with parchment.',
      'Scoop about 40 g of dough, flatten in your hand, place a caramel in the center, and fold dough around it, sealing well.',
      'Place on baking sheet and slightly flatten. Repeat with remaining dough.',
      'Bake 12–14 minutes until edges are set but center looks slightly underdone.',
      'Let cool on the pan for 10 minutes before moving — they firm up as they cool.',
    ],
  },
  {
    title: 'Mascarpone Sprinkle Stuffed Cookies',
    description: 'Soft, chewy sugar cookies filled with a sweet mascarpone filling and loaded with sprinkles for a birthday cake vibe.',
    category: 'cookies',
    servings: 12,
    prep_time: 25,
    cook_time: 12,
    ingredients: [
      // dough
      '230 g unsalted butter, room temperature',
      '300 g granulated sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '1 tsp almond extract',
      '420 g all-purpose flour',
      '1 tsp cream of tartar',
      '1 tsp baking soda',
      '½ tsp salt',
      '80 g rainbow sprinkles',
      // filling
      '225 g mascarpone cheese, cold',
      '120 g powdered sugar, sifted',
      '1 tsp vanilla extract',
    ],
    instructions: [
      'Make filling: beat mascarpone, powdered sugar, and vanilla until smooth. Scoop into 12 small rounds on parchment and freeze at least 30 minutes.',
      'Make dough: beat butter and sugar until fluffy. Add eggs, vanilla, and almond extract.',
      'Whisk flour, cream of tartar, baking soda, and salt. Mix into butter mixture. Fold in sprinkles.',
      'Refrigerate dough 30 minutes.',
      'Preheat oven to 175 °C (350 °F). Line baking sheets with parchment.',
      'Scoop about 50 g of dough, flatten, place a frozen mascarpone round in the center, and seal dough around it.',
      'Roll into a smooth ball and slightly flatten on baking sheet.',
      'Bake 11–13 minutes until edges are set and tops look barely done.',
      'Cool completely on pan — filling sets as the cookie cools.',
    ],
  },
  {
    title: 'Birthday Cake Crumble',
    description: 'A crunchy, buttery vanilla crumble packed with rainbow sprinkles. Used as a topping or mix-in for desserts.',
    category: 'other',
    ingredients: [
      '120 g all-purpose flour',
      '100 g granulated sugar',
      '2 tbsp rainbow sprinkles',
      '½ tsp baking powder',
      '¼ tsp salt',
      '60 ml neutral oil (e.g. vegetable or canola)',
      '1 tbsp vanilla extract',
    ],
    instructions: [
      'Preheat oven to 175 °C (350 °F). Line a baking sheet with parchment.',
      'Mix together flour, sugar, sprinkles, baking powder, and salt.',
      'Add oil and vanilla; stir until the mixture comes together into small crumbles.',
      'Spread crumbles in a single layer on the prepared baking sheet.',
      'Bake 12–15 minutes, stirring once halfway, until golden and fragrant.',
      'Cool completely. Store in an airtight container for up to 1 week.',
    ],
  },

  // ── double chocolate sourdough loaf + whipped butter.pdf ─────────────────
  {
    title: 'Double Chocolate Chip Sourdough Loaf',
    description: 'A rich sourdough boule packed with dark cocoa and two kinds of chocolate chips. Tangy-sweet crumb with a deep chocolate flavor.',
    category: 'breads',
    servings: 12,
    prep_time: 60,
    cook_time: 45,
    ingredients: [
      '100 g active sourdough starter (100% hydration)',
      '340 g bread flour',
      '30 g Dutch-process cocoa powder',
      '230 g water, warm',
      '8 g salt',
      '50 g semi-sweet chocolate chips',
      '50 g dark chocolate chips',
    ],
    instructions: [
      'Mix starter, water, flour, and cocoa in a large bowl until no dry flour remains. Cover and rest (autolyse) 30–45 minutes.',
      'Add salt and squeeze through the dough until fully incorporated.',
      'Perform 4 sets of stretch and folds 30 minutes apart over 2 hours, adding chocolate chips after the second set.',
      'After folds, cover and bulk ferment at room temperature until dough is puffy and has risen 50–75% (4–8 hours depending on temperature).',
      'Turn dough onto a lightly floured surface. Pre-shape into a round; rest 20 minutes.',
      'Shape into a tight boule. Place seam-side up in a flour-dusted banneton.',
      'Cover and cold proof in the refrigerator 8–16 hours.',
      'Preheat oven to 245 °C (475 °F) with a Dutch oven inside for at least 30 minutes.',
      'Turn dough out of banneton onto parchment. Score the top.',
      'Bake covered in the Dutch oven for 20 minutes, then uncover and bake 20–25 more minutes until a dark crust forms.',
      'Cool on a rack at least 1 hour before slicing.',
    ],
  },
  {
    title: 'Cinnamon Sugar Whipped Butter',
    description: 'Fluffy, airy butter whipped with cinnamon and brown sugar. Melts beautifully on warm bread, rolls, or pancakes.',
    category: 'other',
    ingredients: [
      '225 g unsalted butter, room temperature',
      '2 tbsp powdered sugar',
      '1 tbsp brown sugar',
      '1 tsp ground cinnamon',
      '¼ tsp vanilla extract',
      'Pinch of salt',
    ],
    instructions: [
      'Place room-temperature butter in a stand mixer bowl.',
      'Whip on medium-high speed for 3–4 minutes until pale and fluffy.',
      'Add powdered sugar, brown sugar, cinnamon, vanilla, and salt.',
      'Whip on high for 2 more minutes until light and airy, scraping down the sides as needed.',
      'Transfer to a jar or ramekin. Serve immediately or refrigerate. Bring to room temperature before serving.',
    ],
  },

  // ── masteringcinnamonrolls3.pdf ──────────────────────────────────────────
  {
    title: 'Sourdough Cinnamon Rolls',
    description: 'Fluffy cinnamon rolls leavened with sourdough starter for a subtle tang. Pillowy soft with a gooey brown sugar filling and cream cheese glaze.',
    category: 'pastries',
    servings: 10,
    prep_time: 60,
    cook_time: 30,
    ingredients: [
      // dough
      '200 g active sourdough starter (100% hydration)',
      '240 ml whole milk, warm',
      '80 g unsalted butter, melted and cooled',
      '2 eggs',
      '50 g granulated sugar',
      '1 tsp salt',
      '480 g bread flour',
      // filling
      '80 g unsalted butter, softened',
      '180 g brown sugar, packed',
      '2 tbsp ground cinnamon',
      '½ tsp cardamom (optional)',
      // glaze
      '115 g cream cheese, softened',
      '60 g unsalted butter, softened',
      '200 g powdered sugar, sifted',
      '2 tbsp whole milk',
      '1 tsp vanilla extract',
    ],
    instructions: [
      'Combine starter, warm milk, melted butter, eggs, sugar, and salt. Add flour and mix until a shaggy dough forms.',
      'Knead 8–10 minutes until smooth and slightly tacky. Place in a greased bowl, cover.',
      'Bulk ferment at room temperature 4–8 hours until dough is puffy and nearly doubled.',
      'Refrigerate overnight (8–12 hours) for easier handling and flavor development.',
      'Remove dough from refrigerator and let rest 30 minutes.',
      'Roll out on a lightly floured surface to a 30×45 cm rectangle.',
      'Spread softened butter over the dough. Mix brown sugar, cinnamon, and cardamom; sprinkle evenly.',
      'Roll tightly from the long side into a log. Cut into 10 equal rolls.',
      'Place in a greased 23×33 cm pan. Cover and proof at room temperature until puffy, 2–4 hours.',
      'Preheat oven to 175 °C (350 °F). Bake 28–32 minutes until golden.',
      'Beat cream cheese and butter until smooth; add powdered sugar, milk, and vanilla.',
      'Spread glaze over warm rolls. Serve immediately.',
    ],
  },

  // ── Sourdough basica.pdf ─────────────────────────────────────────────────
  {
    title: 'Basic Sourdough Bread',
    description: 'A classic sourdough boule using a simple 4-ingredient formula. Great for beginners learning fermentation and shaping.',
    category: 'breads',
    servings: 8,
    prep_time: 60,
    cook_time: 45,
    ingredients: [
      '40 g active sourdough starter (at peak)',
      '270 g filtered water',
      '10 g pure salt',
      '380 g unbleached bread flour',
    ],
    instructions: [
      'Combine water and starter in a large bowl. Stir to dissolve.',
      'Add salt and flour. Mix until no dry flour remains — dough will be shaggy.',
      'Cover and rest (fermentolyse) 30–60 minutes at room temperature.',
      'Perform 4 sets of stretch and folds, 30 minutes apart (2 hours total).',
      'After folds, cover and bulk ferment at room temperature until dough rises 30–50%, is domed, and has bubbles visible underneath (typically 4–8 hours, depending on temperature).',
      'Gently turn dough onto an unfloured surface. Pre-shape into a round; rest 20 minutes uncovered.',
      'Shape into a tight boule, creating surface tension. Place seam-side up in a flour-dusted banneton.',
      'Cover and cold proof in the refrigerator 8–12 hours (or up to 36 hours).',
      'Preheat oven to 245 °C (475 °F) with a Dutch oven inside for at least 30 minutes.',
      'Turn dough out onto parchment. Score with a bread lame.',
      'Bake covered 20 minutes, then remove lid and bake 20–25 more minutes until deeply golden.',
      'Cool on a rack at least 1–2 hours before slicing.',
    ],
  },
];

const insert = db.prepare(`
  INSERT INTO recipes (title, description, category, servings, prep_time, cook_time, ingredients, instructions)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertMany = db.transaction((recipes) => {
  for (const r of recipes) {
    insert.run(
      r.title,
      r.description ?? null,
      r.category ?? null,
      r.servings ?? null,
      r.prep_time ?? null,
      r.cook_time ?? null,
      JSON.stringify(r.ingredients),
      JSON.stringify(r.instructions)
    );
  }
});

insertMany(recipes);
console.log(`Imported ${recipes.length} recipes successfully.`);
