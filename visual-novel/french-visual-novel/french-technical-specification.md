# Technical Specification for Visual Novel Video Game

## Game Concept

"Bonjour Montréal" is an interactive visual novel designed specifically for beginning French language learners (DELF A1 level).

You are a student from Toronto going to McGill University in Montreal for 1 semester to immerse yourself in French language and Quebec culture.

You will learn basic French vocabulary, simple grammar structures, and cultural aspects of Québécois life.
The game follows a branching narrative structure, similar to an if-else tree, where each choice leads to a different set of events and outcomes.

### Target Audience

- French language learners (Beginners, DELF A1)

### Platform

Web-application

## Story and Setting

### Synopsis

You are a student from Toronto going to McGill University in Montreal for 1 semester to immerse yourself in French language and Quebec culture.

## Core Story Framework

- Linear progression through scenes
- Each scene features one character with the player
- Key decision points that lead to specific branches
- All interactions flow naturally from one to the next

> **Note**: The complete story structure is detailed in [Story-Structure.md](french-story-structure.md)

### Settings

Montreal, Quebec, beginning of fall semester

#### Locations / Scenes

**Bakery (Interior)**  
A rustic, French bakery interior. Organized shelves display croissont and bagette

**Cafe Campus (Interior)**  
A rustic café near McGill University that blends Québécois charm with student energy. Exposed brick walls adorned with local artwork and vintage Montreal concert posters. Wooden tables and comfortable seating create cozy conversation spaces. The counter displays fresh pastries with labels in French, and a chalkboard menu features items in French with small English descriptions. French music plays softly in the background, and a bulletin board is covered with local event flyers and language exchange opportunities

**McGill French Department (Classroom Interior)**  
A modern classroom in a historic building with high ceilings and large windows overlooking the campus. Desks arranged in a semi-circle facing a digital smartboard. Walls feature French language posters, Quebec cultural maps, and student work. A professor's desk at the front holds neatly organized teaching materials. Bookshelves along one wall contain French literature and reference materials. A small Quebec flag sits on the professor's desk alongside a stack of graded papers.

**Student Apartment (Interior)**  
A modest Montreal student apartment in a classic triplex building with exterior spiral staircase. The main room serves as both living and study area with a futon couch, small dining table, and desk. A compact kitchenette contains essential appliances and minimal counter space. Large windows with distinctive Montreal-style shutters look out onto a tree-lined street. The décor blends affordable student furniture with a few Québécois touches like a small map of Montreal neighborhoods and a Fleur-de-lis throw pillow. A small balcony is visible through a French door.

**Art Gallery (Interior)**  
A contemporary art gallery in Montreal showcasing modern art. The gallery features high ceilings with industrial-style lighting, white walls adorned with vibrant and abstract artworks, and polished concrete floors. Sculptures and installations are strategically placed throughout the space, creating an open and inviting atmosphere. Large windows allow natural light to flood the gallery, highlighting the intricate details of the exhibits. The gallery also includes a small café area with minimalist furniture, where visitors can relax and discuss the art. Signage is in French, with English translations available, and the gallery often hosts events and artist talks to engage the local community.

**In one of The Streets of Montreal (outdoor)**  
The bustling streets of Montreal are alive with the vibrant energy of the city. Cobblestone pathways wind through historic neighborhoods, lined with charming brick buildings adorned with colorful murals and street art. Cafés spill out onto the sidewalks, with patrons enjoying their coffee at outdoor tables. Street vendors sell fresh produce, flowers, and local crafts, adding to the lively atmosphere. The sound of French conversations fills the air, mixed with the distant hum of traffic and the occasional street musician playing a lively tune. Trees provide shade along the sidewalks, and the scent of freshly baked bread wafts from nearby bakeries. The streets are a blend of old-world charm and modern urban life, reflecting the unique cultural tapestry of Montreal.

#### Art Gallery Curator

### Characters

#### University Registrar Clerk

- **Name**: Martin Tremblay
- **Gender**: Male
- **Age**: 45
- **Nationality**: Québécois
- **Appearance**: Middle-aged man with salt-and-pepper hair, rectangular glasses, neatly dressed in professional attire with a McGill University pin on his lapel
- **Personality**: Formal, efficient, patient with non-French speakers but appreciative of attempts to speak French
- **Smile Type**: Polite and reserved

- **Role**: Helps player learn administrative vocabulary and formal French
- **Language Level**: Speaks slowly and clearly when needed, uses proper formal French
- **Key Interactions**: Teaches player how to navigate university paperwork, register for classes, find resources for French learners

#### Student 1

- **Name**: Julie Nguyen
- **Gender**: Female
- **Age**: 22
- **Nationality**: Vietnamese-Canadian from Montreal
- **Appearance**: Young woman with long black hair often in a practical ponytail, round glasses, typically dressed in casual but stylish layers appropriate for Montreal weather
- **Personality**: Friendly, enthusiastic, bilingual and proud of it
- **Smile Type**: Warm and inviting
- **Role**: Fellow student, potential friend, cultural guide
- **Language Level**: Native French speaker (Quebec accent) and English
- **Key Interactions**: Study partner, introduces player to Montreal student life

#### Student 2

- **Name**: Saif Wilson
- **Gender**: Male
- **Age**: 24
- **Nationality**: Canadian and Jordanian
- **Appearance**: Tall with light brown hair, athletic build, typically dressed in East Coast casual style with flannel shirts and jeans
- **Personality**: Competitive, analytical, determined to perfect his French
- **Smile Type**: Confident and challenging
- **Role**: Rival student who challenges player
- **Language Level**: Intermediate French with an Acadian influence
- **Key Interactions**: Quiz competitions, grammar discussions, friendly rivalry

#### Barista

- **Name**: Antoine Desjardins
- **Gender**: Male
- **Age**: 26
- **Nationality**: Québécois
- **Appearance**: Creative young man with undercut hairstyle, tasteful ear piercings, casual-trendy clothing often featuring local Montreal bands or arts festivals
- **Personality**: Artistic, conversational, interested in cultural exchange
- **Role**: Provides casual conversation practice
- **Language Level**: Uses casual Québécois French with local slang
- **Key Interactions**: Coffee orders, recommendations for local events, small talk about city life

#### Corner Store Clerk

- **Name**: Monsieur Leblanc
- **Gender**: Male
- **Age**: 62
- **Nationality**: Québécois
- **Appearance**: Older man with white hair and mustache, reading glasses, typically wearing a blue apron with the store logo
- **Personality**: Traditional, initially reserved but warms up to regular customers
- **Role**: Tests player's everyday shopping vocabulary
- **Language Level**: Speaks natural, rapid Québécois French with local expressions
- **Key Interactions**: Purchasing items, asking for recommendations, learning about local products

#### Apartment Neighbor

- **Name**: Madame Beauchamp
- **Gender**: Female
- **Age**: 65
- **Nationality**: Québécoise
- **Appearance**: Elegant older woman with silver hair usually in a neat bun, classic style clothing, often seen tending to plants on her balcony
- **Personality**: Curious, motherly, loves sharing Quebec traditions
- **Role**: Introduces aspects of Québécois home life and traditions
- **Language Level**: Traditional Québécois French with occasional old expressions
- **Key Interactions**: Neighborhood information, cultural customs, home-cooked Quebec recipes

#### Apartment Roommate

- **Name**: Ryan Miller
- **Gender**: Male
- **Age**: 23
- **Nationality**: Canadian (Vancouver)
- **Appearance**: Casual style with University of British Columbia hoodies, athletic build, shaggy dark hair, always with latest smartphone
- **Personality**: Laid-back, social, occasionally homesick for English Canada
- **Role**: Daily conversation partner, source of conflicts and resolutions
- **Language Level**: Basic French mixed with English when frustrated
- **Key Interactions**: Sharing living space, navigating cultural differences, planning weekend exploration of Montreal

#### Professor

- **Name**: Professeure Lafleur
- **Gender**: Female
- **Age**: 38
- **Nationality**: Québécoise
- **Appearance**: Professional woman with shoulder-length curly brown hair, stylish but conservative clothing, often wears distinctive Montreal-designed jewelry
- **Personality**: Passionate about Quebec culture, strict but encouraging
- **Role**: French language instructor at McGill
- **Smile Type**: Encouraging and supportive
- **Language Level**: Adjusts speech based on student level, models proper Québécois French
- **Key Interactions**: Daily lessons, homework assignments, cultural explanations about Quebec

- **Name**: Isabelle Moreau
- **Gender**: Female
- **Age**: 34
- **Nationality**: Québécoise
- **Appearance**: Stylish woman with short, sleek black hair, often wearing contemporary, chic clothing and statement jewelry pieces. She has a professional yet artistic look, with a keen eye for detail.
- **Personality**: Passionate about modern art, knowledgeable, articulate, and approachable. She is enthusiastic about sharing her love for art and culture with others.
- **Smile Type**: Warm and engaging
- **Role**: Provides insights into the art pieces, engages the player in discussions about modern art, and introduces cultural aspects of Quebec through the exhibits.
- **Language Level**: Fluent in French and English, uses sophisticated vocabulary related to art and culture.
- **Key Interactions**: Discussing art exhibits, explaining the significance of various artworks, inviting the player to gallery events and artist talks, and offering recommendations for other cultural activities in Montreal.

### Technical implementation

- All scenes will feature only the player and one other character
- characters will refernce other characters in the dialogue but never apear together in the same scene
- scene transitions will be used to switch betweeen character interactions.
