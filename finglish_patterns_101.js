/**
 * Finglish Fixer Pattern List
 * ---------------------------
 * This file contains 101 commonly found Finnish-English (Finglish) phrases 
 * with regex patterns, explanations, and native-sounding suggestions.
 *
 * To use this file in a Google Apps Script project:
 * 1. Copy the entire contents of this file.
 * 2. Paste into your main Code.gs file (or a separate .gs file in the Apps Script editor).
 * 3. Make sure your suggestion engine loops over `PHRASE_PATTERNS` and applies `.regex.exec(text)`.
 *
 * Categories follow the original spreadsheet taxonomy (e.g., Fake Idiom, Grammar).
 */

const PHRASE_PATTERNS = [
  {
    id: "001",
    label: "attract feedback",
    regex: /battract\s+feedback\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "The brand has received lots of positive feedback"
  },
  {
    id: "002",
    label: "gather attendees",
    regex: /bgather\s+attendees\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "The event attracted close to 300 attendees"
  },
  {
    id: "003",
    label: "heavy planning",
    regex: /bheavy\s+planning\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Keep it lean and manage the projects without cumbersome/burdensome/unnecessarily extensive resource planning!"
  },
  {
    id: "004",
    label: "long line, longest line",
    regex: /blong\s+line,\s+longest\s+line\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "One of PehuTec’s most experienced telecommunications pioneers is electronics designer Jorma Savolainen; Heikki Silvennoinen, a legendary Finnish blues guitarist and singer"
  },
  {
    id: "005",
    label: "with a low threshold",
    regex: /bwith\s+a\s+low\s+threshold\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Career talk open to everyone; With Pihlajalinna’s Worry in Mind service, employees can feel free to contact the mental health line at any time they are worried about something, big or small; With us, you can develop your entrepreneurial skills and ideas with little risk"
  },
  {
    id: "006",
    label: "move around in",
    regex: /bmove\s+around\s+in\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "There are many of those who log into the systems and use/enter premises"
  },
  {
    id: "007",
    label: "on the other hand",
    regex: /bon\s+the\s+other\s+hand\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. The program should search for paragraphs with \"on the other hand\" which are preceded by paragraphs which do NOT contain \"on the one hand\".",
    suggestion: "Wertti, the end result of the cooperation between HUNT AI and Kodan, is a user-friendly online service that makes it easy for consumers to communicate with insurance companies. It helps consumers submit insurance quote requests effortlessly through a simple and adaptive process, matching their needs with multiple offers from various companies.
The service also benefits insurers by providing them with high-quality leads and enabling them to focus on delivering optimal solutions for clients. Insurers no longer have to rely on cold calls, which may also be prohibited soon due to EU regulations."
  },
  {
    id: "008",
    label: "soonest possible",
    regex: /bsoonest\s+possible\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Let us know what you are interested in and we will contact you as soon as possible."
  },
  {
    id: "009",
    label: "strong reaction",
    regex: /bstrong\s+reaction\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. Ask the user: \"'Strong reaction' in English means a negative reaction. Is this what you meant? If not, consider 'positive effect'.\"",
    suggestion: "Testing the plugs immediately had a positive effect: the high level of stress caused by noise started to decrease and the idea of refining the earplugs came into the mind."
  },
  {
    id: "010",
    label: "take into use",
    regex: /btake\s+into\s+use\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. Search for all forms of \"take into use\", including \"taken into use\", \"took into use\", etc. Also search for forms of \"take into use\" where the object comes between: \"The system was taken gradually into use\".",
    suggestion: "The company deploys/commissions/launches the system"
  },
  {
    id: "011",
    label: "tens of",
    regex: /btens\s+of\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "If the system consists of multiple servers and dozens of cameras, then we recommend proper server hardware with client workstations"
  },
  {
    id: "012",
    label: "that’s given",
    regex: /bthat’s\s+given\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "You want results. That’s a given."
  },
  {
    id: "013",
    label: "we at",
    regex: /bwe\s+at\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Here at Barona, which was founded in Finland at the turn of the millennium, we "
  },
  {
    id: "014",
    label: "work community",
    regex: /bwork\s+community\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Goal-driven, systematic development of supervisors’ managerial skills and the functions of workplaces/teams enables employees’ occupational wellbeing and the success of business operations."
  },
  {
    id: "015",
    label: "working life",
    regex: /bworking\s+life\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. Also search for \"work life\" and \"worklife\". The program can also suggest a simple replacement of \"working life\", \"work life\" and \"worklife\" with \"world of work\" or \"working world\".",
    suggestion: "The course is designed especially for international students and job seekers who wish to know more about what working in Finland is like."
  },
  {
    id: "016",
    label: "in connection with",
    regex: /bin\s+connection\s+with\b/i,
    category: "Fake Idiom",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Rapid HIV testing in a mobile unit at/during/in conjunction with Bear Picnic"
  },
  {
    id: "017",
    label: "also",
    regex: /balso\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. The program should search for two main incorrect usages of Finglish: placing \"also\" after the main verb (a verb other than \"be\"), and placing \"also\" before the verb \"be\".",
    suggestion: "Does the payment also cover the return flight?; A three-mile designated off-road cycling trail is also offered"
  },
  {
    id: "018",
    label: "definite article, common noun, proper noun order",
    regex: /bdefinite\s+article,\s+common\s+noun,\s+proper\s+noun\s+order\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Accessibility at the Aleksandria Learning Centre"
  },
  {
    id: "019",
    label: "especially, misplaced and misused",
    regex: /bespecially,\s+misplaced\s+and\s+misused\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Two distinct issues: if \"especially\" follows an adjective, the order of the adjective and adverb should be reversed. But if \"especially\" follows something other than an adjective, then a comma should be inserted before \"especially\".",
    suggestion: "The increase in number of passengers was especially visible in the North Atlantic and European routes; our customers are now booking holiday trips, especially for their autumn leave and for the upcoming winter season; Covid vaccination coverage is improving swiftly, especially in Asia"
  },
  {
    id: "020",
    label: "even up to (number)",
    regex: /beven\s+up\s+to\s+\(number\)\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Over its life cycle, SAF lowers carbon emissions drastically, by as much as 80%* compared to fossil jet fuel."
  },
  {
    id: "021",
    label: "experience/expertise from -> over, spanning",
    regex: /bexperience/expertise\s+from\s+\->\s+over,\s+spanning\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. The issue specifically concerns \"from\" when followed by a time period and when following \"expertise\" or \"experience\"",
    suggestion: "Four decades of telecommunications expertise; Telecommunications expertise spanning four decades; Telecommunications expertise acquired over four decades"
  },
  {
    id: "022",
    label: "apply from -> to",
    regex: /bapply\s+from\s+\->\s+to\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Specifically concerns the verb \"apply\". Note that the suggestion can also be for new word order.",
    suggestion: "You can apply to Kela for private daycare allowance"
  },
  {
    id: "023",
    label: "go through",
    regex: /bgo\s+through\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. \"Go through\" in the sense \"discuss\", not physically go through, like \"go through the park for a shortcut\".",
    suggestion: "The headless architecture was gone over especially thoroughly and different options discussed along the way"
  },
  {
    id: "024",
    label: "incorrect comma before “if”",
    regex: /bincorrect\s+comma\s+before\s+“if”\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. There are cases when a comma is correct before the if-clause, but in those cases the comma is separating something else.",
    suggestion: "What to do if we are not sure about the trustworthiness of external work force?"
  },
  {
    id: "025",
    label: "incorrectly phrased questions",
    regex: /bincorrectly\s+phrased\s+questions\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. In the erroneous example, the company either wants to make a statement or ask a question, both of which it gets wrong.",
    suggestion: "How is Neste MY SAF made?; How Neste MY SAF is made"
  },
  {
    id: "026",
    label: "or instead of and",
    regex: /bor\s+instead\s+of\s+and\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. This fix should be restricted to statements, not questions.",
    suggestion: "The programme is also taking place in several other countries such as Bolivia, Colombia, Tanzania, Uganda, and Zambia!"
  },
  {
    id: "027",
    label: "paint oneself in the corner",
    regex: /bpaint\s+oneself\s+in\s+the\s+corner\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Search for all reflexive pronouns: myself, yourself, himself, etc., in the phrase \"paint (pronoun) in the corner\"",
    suggestion: "For us it was important not to paint ourselves into a corner when it comes to technologies and other choices; Finland's Jori Hulkkonen has never been the one to paint himself into a corner"
  },
  {
    id: "028",
    label: "possessive pronoun + following",
    regex: /bpossessive\s+pronoun\s+\+\s+following\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Gift cards are available at the following restaurants; Gift cards are available at these restaurants in our chain; Buy gift cards here; The following stops are; The next stops are"
  },
  {
    id: "029",
    label: "provide without with",
    regex: /bprovide\s+without\s+with\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "This course supports and prepares students studying abroad by providing them with opportunities to practise; This course supports and prepares students studying abroad by giving them opportunities to practise"
  },
  {
    id: "030",
    label: "run-on gerunds without commas",
    regex: /brun\-on\s+gerunds\s+without\s+commas\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Search for gerunds following nouns at the start of a sentence.",
    suggestion: "SAF is a proven solution which reduces GHG emissions by up to 80%; SAF is a proven solution, reducing GHG emissions by up to 80%; SAF is a proven solution for reducing GHG emissions by up to 80%"
  },
  {
    id: "031",
    label: "start from (gerund)",
    regex: /bstart\s+from\s+\(gerund\)\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. The search can specifically focus on \"start from\" + a gerund and suggest replacing \"from\" with \"with\" or \"from (verb)\" with \"with\" if there's a noun after the verb. ",
    suggestion: "All journeys start with taking the first steps; All journeys start with the first steps"
  },
  {
    id: "032",
    label: "that instead of gerund",
    regex: /bthat\s+instead\s+of\s+gerund\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Not essential to include right now. The pattern \"that the new service would cater\" is common. It's hard to pick out automatically which uses of \"that\" followed by an object, \"would\" and noun are incorrect and should be replaced by a gerund.",
    suggestion: "A broad scoped design phase was key in getting all the different needs into the project and in the new service catering as a basis for other countries’ and business areas’ ecommerce solutions"
  },
  {
    id: "033",
    label: "the nature",
    regex: /bthe\s+nature\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. To save space, we can just search for \"in the nature\".",
    suggestion: "every Myrsky employee knows that the greatest power is in nature"
  },
  {
    id: "034",
    label: "the society",
    regex: /bthe\s+society\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Limit to \"in the society\"",
    suggestion: "Myrsky speaks honestly about processes taking place in society "
  },
  {
    id: "035",
    label: ""they" to mean company",
    regex: /b"they"\s+to\s+mean\s+company\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Limit to sentences containing a capitalized company name",
    suggestion: "The company turned to Kodan when it wanted to renew their software development processes "
  },
  {
    id: "036",
    label: "year 2022",
    regex: /byear\s+2022\b/i,
    category: "Incorrect Grammar",
    explanation: "This is a literal or non-native phrase. Search for all cases of \"the year NNNN\" and \"year NNNN\" that are NOT at the start of a sentence.",
    suggestion: "FCG’s Annual Review for 2022 is now available; The biggest individual projects in 2022 were "
  },
  {
    id: "037",
    label: "comma instead of decimal point",
    regex: /bcomma\s+instead\s+of\s+decimal\s+point\b/i,
    category: "Incorrect Punctuation",
    explanation: "This is a literal or non-native phrase. Search for commas used erroneously as decimal separators, not as thousands separators.",
    suggestion: "18.5 GW"
  },
  {
    id: "038",
    label: "lack of comma before i.e.",
    regex: /black\s+of\s+comma\s+before\s+i\.e\.\b/i,
    category: "Incorrect Punctuation",
    explanation: "This is a literal or non-native phrase. Search for \"i.e.\" not preceded by or followed by a comma and suggest commas on either side.",
    suggestion: "The network business model is based on a broad network that is built around one or a few airports, i.e., around the hub"
  },
  {
    id: "039",
    label: "excessively long abstract nouns",
    regex: /bexcessively\s+long\s+abstract\s+nouns\b/i,
    category: "Lengthiness",
    explanation: "This is a literal or non-native phrase. In addition to \"operationalization\", \"operationalisation\", \"familiarisation\" and \"familiarization\", search for all words of 15 letters or more ending in \"isation\" or \"ization\".",
    suggestion: "When the flood forecast and warning system is launched in practice, we made people aware of and familiar with it."
  },
  {
    id: "040",
    label: "free-of-charge",
    regex: /bfree\-of\-charge\b/i,
    category: "Lengthiness",
    explanation: "This is a literal or non-native phrase. Search for both \"free of charge\" and \"free-of-charge\".",
    suggestion: "Many free events in Helsinki on Independence Day"
  },
  {
    id: "041",
    label: "utilize, utilise",
    regex: /butilize,\s+utilise\b/i,
    category: "Lengthiness",
    explanation: "This is a literal or non-native phrase. Search for \"utilise\", \"utilize\", and all forms of those verbs, as well as \"utilisation\" and \"utilization\".",
    suggestion: "Our mission is to keep our customers at the forefront of digital evolution by using our diverse expertise "
  },
  {
    id: "042",
    label: "already",
    regex: /balready\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Two distinct issues: if \"already\" is before a temporal phrase beginning with \"in\", suggest \"as early as\" instead\"; but if \"already\" precedes words like \"during\", suggest deletion.",
    suggestion: "As early as in the design phase we clearly recognized new needs; What Lamia brought to the table early in the process was the headless approach; trainings played an important role during the project"
  },
  {
    id: "043",
    label: "as well as",
    regex: /bas\s+well\s+as\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Simply highlight all cases of \"as well as\" and suggest \"'As well as' is often unnecessary. Only use 'as well as' when the last item in your list is very distinct from the first items in your list. Otherwise, just use 'and'.\"",
    suggestion: "We offer funding, advice, information and contacts in the target market"
  },
  {
    id: "044",
    label: "case",
    regex: /bcase\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for all examples of \"Case\" followed by a capitalized word",
    suggestion: "Testimonial: Seure; Customer success story: R-kioski; What we did for Marimekko"
  },
  {
    id: "045",
    label: "compliment",
    regex: /bcompliment\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"compliment\" in the same sentence as \"spirit\" or \"cooperation\" and suggest \"praise\" as a replacement.",
    suggestion: "It’s customary to praise others’ team spirit and smooth cooperation"
  },
  {
    id: "046",
    label: "cooperation",
    regex: /bcooperation\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search specifically for \"the cooperation\" and suggest: \"Do you really mean cooperation, or do you mean a service your company provided to a client? If so, say that.\"",
    suggestion: "The measures of personnel satisfaction have gone in a better direction thanks to the service/consultation/Company Name"
  },
  {
    id: "047",
    label: "describes/continues/shares/clarifies, etc. -> says",
    regex: /bdescribes/continues/shares/clarifies,\s+etc\.\s+\->\s+says\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for any verb other than \"say\", \"comment\", \"tell\", \"note\", \"begin\", \"conclude\", \"ask\" or \"answer\" after a quotation mark, or after a quotation mark and comma, and suggest replacing with \"says\"/\"said\".",
    suggestion: "We have achieved a lot as a team - teamwork is at the heart of our success,” says Calvin; “The jury is not allowed to comment on anything during the competition, so the Shadow Jury can shed some light on issues that the jury might be pondering on”, says soprano Olga Heikkilä; \"We have, despite the pandemic, already built a solid foundation for it,” says Pekka Mattila"
  },
  {
    id: "048",
    label: "development work",
    regex: /bdevelopment\s+work\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for all examples of \"development work\" and suggest: \"What do you really mean by this? Can you rewrite it in a way that the reader instantly understands?\"",
    suggestion: "Although the integration of these systems has not been fully completed at all levels, it does not prevent improvements being made."
  },
  {
    id: "049",
    label: "due to",
    regex: /bdue\s+to\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"due to\" and suggest: \"Only say 'due to' when you mean something happening as a result of an unexpected but ultimately manageable interruption, like a strike or a power cut. Don't say something changes 'due to the war in Ukraine'. Use 'because' instead. And don't use 'due to' in marketing texts or sales copy. Say something more creative.\"",
    suggestion: "Long winters mean Nordic people spend a lot of time at home; If your degree studies at a Ukrainian higher education institution in the arts have been suspended because of the war in Ukraine"
  },
  {
    id: "050",
    label: "enabling (pronoun) to",
    regex: /benabling\s+\(pronoun\)\s+to\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest replacing \"enable (pronoun) to\" with \"allow (pronoun) to\"",
    suggestion: "the service benefits insurers by providing them with high-quality leads and allowing them to focus on delivering optimal solutions"
  },
  {
    id: "051",
    label: "entity",
    regex: /bentity\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest rewriting more clearly when the word \"entity\" appears.",
    suggestion: "Each work environment is unique: its specific features should always be taken into account in safety training"
  },
  {
    id: "052",
    label: "even the (superlative)",
    regex: /beven\s+the\s+\(superlative\)\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Insta implements the largest automation and digitalization projects with short lead times "
  },
  {
    id: "053",
    label: "forerunner, frontrunner",
    regex: /bforerunner,\s+frontrunner\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Also suggest \"pioneer\"",
    suggestion: "Wärtsilä’s new flagship breaks new ground in responsible energy and marine industry; Metso is an industry leader in sustainable technologies"
  },
  {
    id: "054",
    label: "gain appreciation",
    regex: /bgain\s+appreciation\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest: \"Unless by 'gain appreciation' you mean 'increase in value', either say whose appreciation you've gained ('gain clients' appreciation) or say 'become more respected'.\"",
    suggestion: "With professionally crafted and carefully personalized content, your business will attract more interest, gain clients’ appreciation, and pave the way to purchase decisions/
With professionally crafted and carefully personalized content, your business will attract more interest, become more respected in its field, and pave the way to purchase decisions"
  },
  {
    id: "055",
    label: "get to know",
    regex: /bget\s+to\s+know\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for all forms of \"get to know\". Suggest: \"'Get to know' is used when people get to know each other. Don't use it in a headline when you want your readers to learn more, read more or explore something. Use another verb.\"",
    suggestion: "Read more about our projects from last year in our annual review/Explore our projects from last year in more detail in our annual review; Check out our solutions/Read about our solutions"
  },
  {
    id: "056",
    label: "heed",
    regex: /bheed\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"heed\" in the same sentence as \"practices\" or \"models\" and suggest \"apply\" as a replacement.",
    suggestion: "Each project is unique, but we prefer working in 2-week sprints that apply the best practices of agile"
  },
  {
    id: "057",
    label: "necessary, needed",
    regex: /bnecessary,\s+needed\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"needed\" before a noun and suggest replacement either with \"(noun) needed\" or \"necessary (noun)\".",
    suggestion: "Our customer can rent a water treatment system for the time needed/Our customer can rent a water treatment system for the necessary time"
  },
  {
    id: "058",
    label: "online service",
    regex: /bonline\s+service\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest replacement of \"online service\" with either \"site\" or \"website\".",
    suggestion: "Renewed online service rocketed visitor numbers to a huge rise"
  },
  {
    id: "059",
    label: "participate",
    regex: /bparticipate\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"participate\" with \"event\", \"survey\", \"open day\", \"conference\". Suggest: \"In English, we 'attend', 'go to' and 'be at' events, rather than 'participating in' them. For surveys, don't say 'participate': say 'answer', 'respond to' or 'take'.\"",
    suggestion: "Here are the ten biggest events we’ll be attending; We Value Your Feedback – Take Our Event Survey; Attend Hive Helsinki's Open Day"
  },
  {
    id: "060",
    label: "pay attention",
    regex: /bpay\s+attention\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for all forms of \"pay attention to\" and suggest: \"'Pay attention to' is boring Finglish. Consider saying 'focus on' or something else instead.\"",
    suggestion: "We focus sharply on the accessibility and the responsiveness of the user interface to make sure that your digital service is usable anywhere"
  },
  {
    id: "061",
    label: "possibility to",
    regex: /bpossibility\s+to\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"possibility to\" and suggest: \"When you say 'possibility', it sounds like the thing never happened. You could mean 'opportunity'.\"",
    suggestion: "one of the main reasons why my aunt had the opportunity to do what she loved; I have also had the opportunity to see comprehensively the progress of the telecommunications development "
  },
  {
    id: "062",
    label: "reference",
    regex: /breference\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest: \"If you mean clients you've served or projects you've done in the past, don't say 'references', because we don't use the word that way in English.\"",
    suggestion: "projects/case studies/customer success stories/past clients"
  },
  {
    id: "063",
    label: "renew",
    regex: /brenew\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest: \"In English, we 'renew' driving licences, wedding vows and insurance policies. When you make something like new, you 'modernize', 'overhaul' or 'update'.\"",
    suggestion: "Experience our brand-new/overhauled/modernized long-haul cabins"
  },
  {
    id: "064",
    label: "spar",
    regex: /bspar\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Sowellus was our sparring partner for user experience design; We bounced some ideas around with Sowellus about user experience design; We used Sowellus as a sounding board for user experience design."
  },
  {
    id: "065",
    label: "(possessive pronoun) studies",
    regex: /b\(possessive\s+pronoun\)\s+studies\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Software developer Aki Panuma’s career at Probot started with project periods while at university"
  },
  {
    id: "066",
    label: "take care of",
    regex: /btake\s+care\s+of\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "We also ensure the reliability of your information systems"
  },
  {
    id: "067",
    label: "tough (experts)",
    regex: /btough\s+\(experts\)\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "We felt that the cybersecurity team, in particular, needed seasoned/experienced/skilled experts, as there was no room to compromise here"
  },
  {
    id: "068",
    label: "traffic ",
    regex: /btraffic\s+\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest: \"In English, 'traffic' isn't the cars, vehicles, trams or trains on a road or track – it's 'congestion'. What you might mean is 'transport' or 'vehicles'.\"",
    suggestion: "The system makes it possible to see in real time how the trams/vehicles/trains are running and whether the various partners are sticking to their service obligations"
  },
  {
    id: "069",
    label: "use money -> spend money",
    regex: /buse\s+money\s+\->\s+spend\s+money\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for \"use money\" in all its forms.",
    suggestion: "It makes no sense spending money on boring souvenirs when you can collect more interesting yourself"
  },
  {
    id: "070",
    label: "verify",
    regex: /bverify\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Suggest: \"'Verify' means 'see for yourself that it is true'. If you mean 'prove something to someone else', say that, or use another verb.\"",
    suggestion: "please see our agent at the airport Arrival Service desk so they can verify the damage and create a damage report"
  },
  {
    id: "071",
    label: "a single whole",
    regex: /ba\s+single\s+whole\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Contact our Customer Service at Messages and tell them that you want to consolidate all your household’s insurance policies into one policy"
  },
  {
    id: "072",
    label: "works",
    regex: /bworks\b/i,
    category: "Misuse of real English words",
    explanation: "This is a literal or non-native phrase. Search for capitalized headlines \"Works\" and \"Our Works\" in those specific forms",
    suggestion: "Our work; Projects; Customer success stories; Testimonials"
  },
  {
    id: "073",
    label: "comma, and instead of two sentences",
    regex: /bcomma,\s+and\s+instead\s+of\s+two\s+sentences\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "The importance of automation and data utilisation in business is growing. Intelligent business is the next level of digitalisation."
  },
  {
    id: "074",
    label: "implement",
    regex: /bimplement\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. Suggest all forms of \"implement\" are replaced with \"do\", \"run\" or \"conduct\".",
    suggestion: "Automation was done using rotary indexing table"
  },
  {
    id: "075",
    label: "in the form of",
    regex: /bin\s+the\s+form\s+of\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Check out the Kojamo Sustainability programme podcast"
  },
  {
    id: "076",
    label: "lack of possessive",
    regex: /black\s+of\s+possessive\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "clear guidelines on the company’s future and its owners’ intentions"
  },
  {
    id: "077",
    label: "passive when there is a subject",
    regex: /bpassive\s+when\s+there\s+is\s+a\s+subject\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Finnish diplomatic missions abroad issue visas."
  },
  {
    id: "078",
    label: "usable",
    regex: /busable\b/i,
    category: "Readability",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Basics of Open and Responsible Science is aimed at UEF and YUFE network graduate students, but everyone can use the course material"
  },
  {
    id: "079",
    label: "among other things",
    regex: /bamong\s+other\s+things\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Search for \"among other things\" and \"among other factors\" and suggest: \"Nobody cares whether the thing is one of many other things! It's probably completely irrelevant, so just leave it out.\"",
    suggestion: "As part of Turku University Hospital, Auria Biobank is a repository of over 1M+ tissue samples from patients"
  },
  {
    id: "080",
    label: "be possible",
    regex: /bbe\s+possible\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Suggest replacing all forms of \"be possible\" with \"can\" or \"could\".",
    suggestion: "Could/Can fares fall"
  },
  {
    id: "081",
    label: "consequently",
    regex: /bconsequently\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Suggest: \"'Consequently' is too long. Either say 'that is why' or say nothing at all. It's often obvious that something is a consequence of something else.\"",
    suggestion: "Myrsky’s task is to produce domestic renewable energy to strengthen local vitality, improve Finland’s self-sufficiency and support the green transition. That is why Työmaa started to refine an idea of a continuously renewing company with the environment as one of its most important partners."
  },
  {
    id: "082",
    label: "different",
    regex: /bdifferent\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Search for \"different\" within a few words of \"options\" and \"stages\".",
    suggestion: "Learn more about sustainable palm oil options; This tool allowed us to unify and replace several separate tools and speed up the work stages of energy system and energy consumption calculations"
  },
  {
    id: "083",
    label: "diverse",
    regex: /bdiverse\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "We offer extensive opportunities for continuous improvement of your professional competence, in line with your own goals"
  },
  {
    id: "084",
    label: "e.g. (the abbreviation in particular)",
    regex: /be\.g\.\s+\(the\s+abbreviation\s+in\s+particular\)\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "For example, we provide the following services for faculty and staff"
  },
  {
    id: "085",
    label: "error situation",
    regex: /berror\s+situation\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "The situation in the online store has been corrected"
  },
  {
    id: "086",
    label: "excessively long sentences",
    regex: /bexcessively\s+long\s+sentences\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Search for all sentences longer than 25 words.",
    suggestion: "We help our customers recycle more through planned origin sorting. We take collect waste at source using solutions that promote sorting. We transport the materials for further processing into recycled raw materials for industry."
  },
  {
    id: "087",
    label: "for example",
    regex: /bfor\s+example\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Suggest: \"Only say 'for example' if it's really an example. Don't use it before a full list of all the examples.\"",
    suggestion: "We support your career development. We offer learning programmes for juniors, have lots of internal trainings, and all our employees become certified business technology professionals."
  },
  {
    id: "088",
    label: "if needed",
    regex: /bif\s+needed\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "We created a web app called Oma Puhti, where people can check their test results and contact a doctor."
  },
  {
    id: "089",
    label: "if you wish",
    regex: /bif\s+you\s+wish\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Yes, it can. You can use the gift card to pay part of the total amount of your purchase."
  },
  {
    id: "090",
    label: "in addition to + also",
    regex: /bin\s+addition\s+to\s+\+\s+also\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "In addition to placing orders via our online service, you can do so via the traditional channels"
  },
  {
    id: "091",
    label: "in practice",
    regex: /bin\s+practice\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Seven Finnish municipalities are building a platform that will bring together information, systems and services for comprehensive and upper secondary school students, teachers, parents and administrators in the future. The platform makes life easier for and frees up time for teaching and student support."
  },
  {
    id: "092",
    label: "in such a way that",
    regex: /bin\s+such\s+a\s+way\s+that\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Plan projects so they are sensible, profitable, and sustainable"
  },
  {
    id: "093",
    label: "include, among other things",
    regex: /binclude,\s+among\s+other\s+things\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "I work at Codento, a consulting company specializing in cloud technology, software development, and data/AI topics, and my job description includes finding the right talent for our clients."
  },
  {
    id: "094",
    label: "matters",
    regex: /bmatters\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Fortum’s smart electricity contracts and additional services bring predictability and ease to your home’s electricity.; You can take care of your insurance and claims quickly and easily via phone."
  },
  {
    id: "095",
    label: "multi-word verb in gerund",
    regex: /bmulti\-word\s+verb\s+in\s+gerund\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "What made the case special was that all technology and other choices were made with Paulig’s broader ecommerce business in mind"
  },
  {
    id: "096",
    label: "reduced number",
    regex: /breduced\s+number\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Fewer packing parts also means fewer storage places required"
  },
  {
    id: "097",
    label: "simultaneously, at the same time",
    regex: /bsimultaneously,\s+at\s+the\s+same\s+time\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. Search for \"simultaneously\" at the start of a sentence and suggest deletion.",
    suggestion: "Regardless of the channel, your company can produce a whole and targeted customer experience. More efficient customer information management enables additional sales."
  },
  {
    id: "098",
    label: "survey work, investigation work",
    regex: /bsurvey\s+work,\s+investigation\s+work\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "More information about the possible uses of AI in Finnish health care will soon be available when the survey/study/questionnaire done by the Ministry of Social Affairs and Health "
  },
  {
    id: "099",
    label: "together with",
    regex: /btogether\s+with\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "With our partners, we are on a journey toward an emission-free energy system"
  },
  {
    id: "100",
    label: "versatile",
    regex: /bversatile\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "We offer a wide range of services for private customers, such as daily banking, loans, savings and investments, as well as extensive owner-customer benefits"
  },
  {
    id: "101",
    label: "with regard to",
    regex: /bwith\s+regard\s+to\b/i,
    category: "Verbosity",
    explanation: "This is a literal or non-native phrase. ",
    suggestion: "Your personal data processing rights"
  },
];