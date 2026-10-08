import type { Blog, BlogBlock } from "@/types/content";

const p = (text: string): BlogBlock => ({ type: "p", text });
const h2 = (text: string): BlogBlock => ({ type: "h2", text });
const list = (items: string[]): BlogBlock => ({ type: "list", items });

export const blogs: Blog[] = [
  {
    slug: "child-snoring-restless-sleep",
    title: "My Child Is Snoring — What Should I Do? (Causes, Warning Signs & Next Steps)",
    excerpt:
      "Is your child snoring or sleeping restlessly? Here's what it can mean, the warning signs to watch for, and exactly what to do next.",
    category: "Pediatric Airway Health",
    readingTime: "4 min read",
    publishedAt: "2026-09-01",
    image: "/images/blog/child-snoring-restless-sleep.webp",
    keywords: [
      "my child is snoring what should I do",
      "child snoring causes",
      "toddler snoring at night",
      "child mouth breathing",
      "pediatric dentist for snoring",
      "kanyakumari pediatric dentist",
    ],
    content: [
      p("Does your child snore, sleep with their mouth open, toss and turn throughout the night, or sleep in unusual positions? Do they frequently have a blocked or runny nose? These may seem like small childhood habits, but sometimes they can indicate that your child is struggling to breathe comfortably during sleep."),
      h2("Why is my child snoring?"),
      p("Healthy breathing plays an important role in a child's sleep, growth and development. Persistent mouth breathing may be associated with nasal obstruction, enlarged adenoids or tonsils, allergies, tongue posture, or developing jaw and dental patterns."),
      p("Parents may also notice teeth grinding, dry mouth, restless sleep, frequent waking, daytime tiredness, difficulty concentrating, or changes in chewing and swallowing."),
      h2("My child is snoring — what should I do?"),
      list([
        "Don't assume it's “normal” — persistent snoring in children is worth checking, even if it seems minor.",
        "Watch for mouth breathing, restless sleep, teeth grinding, or daytime tiredness alongside the snoring.",
        "Mention it at your child's next dental or pediatric visit — don't wait for a separate appointment.",
        "Expect an airway-focused evaluation, not just a cavity check — jaw, bite, tongue posture and nasal breathing all matter.",
        "Be prepared for a team approach — a pediatric dentist, ENT specialist, pediatrician, orthodontist, or myofunctional therapist may each play a role depending on findings.",
      ]),
      p("This is why airway-related problems often need a team approach. Depending on the child's findings, assessment may involve a pediatric dentist, ENT specialist, pediatrician, orthodontist, or myofunctional therapist."),
      p("A pediatric dental examination can assess the child's teeth and jaws along with oral habits, tongue posture, bite, palate and other signs that may suggest the need for further airway evaluation."),
      p("Snoring in a child should not automatically be considered “normal.”"),
      p("If something about your child's breathing or sleep doesn't seem right, mention it during their dental or medical visit. Early evaluation can help identify the cause and determine whether treatment or simply monitoring is appropriate."),
    ],
    faqs: [
      {
        question: "My child is snoring — what should I do?",
        answer:
          "Start by noting what you observe — snoring, mouth breathing, restless sleep, teeth grinding, or daytime tiredness — and mention it at your child's next pediatric or dental visit. A pediatric dental examination can assess jaw development, tongue posture, bite, and other signs that may call for further airway evaluation. Snoring in a child should not automatically be considered normal, so it's worth having it checked rather than waiting.",
      },
      {
        question: "Is it normal for a child to snore every night?",
        answer:
          "Occasional snoring can happen, but frequent or nightly snoring is not something to dismiss as normal. It can be linked to nasal obstruction, enlarged adenoids or tonsils, allergies, tongue posture, or developing jaw and dental patterns, and is worth having evaluated.",
      },
      {
        question: "Which specialist should I see if my child snores?",
        answer:
          "Airway-related concerns often need a team approach. Depending on your child's findings, that may involve a pediatric dentist, ENT specialist, pediatrician, orthodontist, or myofunctional therapist working together.",
      },
    ],
  },
  {
    slug: "milk-tooth-why-treat",
    title: "“It's Only a Milk Tooth!” — Should You Treat a Baby Tooth That Will Eventually Fall Out?",
    excerpt:
      "Milk teeth do fall out eventually — but should you still treat a decayed or infected one? Here's why every milk tooth deserves proper treatment.",
    category: "Pediatric Dentistry",
    readingTime: "3 min read",
    publishedAt: "2026-09-01",
    image: "/images/blog/milk-tooth-why-treat.webp",
    keywords: [
      "should I treat my child's milk tooth",
      "is it necessary to treat a baby tooth cavity",
      "pulpectomy for kids",
      "baby tooth infection treatment",
    ],
    content: [
      p("One of the most common questions parents ask is: “Doctor, it's only a milk tooth. Won't it fall anyway?”"),
      p("Yes, milk teeth eventually fall—but every milk tooth has its own natural time to go."),
      h2("Should I treat my child's milk tooth if it's going to fall out anyway?"),
      p("When decay reaches the nerve of a primary tooth, a child may develop pain, sensitivity, difficulty eating, swelling or infection. Sometimes children don't complain clearly even when a tooth is badly affected."),
      p("If the tooth is restorable and still needs to remain in the mouth for a significant period, a pulpectomy may be recommended. This involves removing infected or damaged tissue from inside the tooth, disinfecting the canals and restoring the tooth so it can continue functioning."),
      h2("Why save a milk tooth?"),
      p("Primary teeth help children chew, speak and smile, and they also help maintain space for the developing permanent teeth."),
      p("Leaving an infected tooth untreated simply because it will eventually fall isn't always the safest option. At the same time, not every damaged milk tooth requires a pulpectomy. If the tooth is close to its natural shedding time, cannot be predictably restored, or has certain other problems, extraction may be more appropriate."),
      p("The goal is therefore not to “save every milk tooth.”"),
      p("The goal is to choose the treatment that is most appropriate for that particular tooth, at that particular stage of your child's development."),
    ],
    faqs: [
      {
        question: "Should I treat my child's milk tooth if it's going to fall out anyway?",
        answer:
          "Yes, in most cases. Every milk tooth has its own natural time to shed, and an infected one left untreated can cause pain, swelling, or difficulty eating in the meantime. If the tooth is restorable and needs to remain in the mouth for a while longer, a pulpectomy can remove the infection and keep it functional until it's ready to fall out naturally.",
      },
      {
        question: "What happens if a milk tooth infection is left untreated?",
        answer:
          "An infected primary tooth can cause ongoing pain, swelling, or difficulty chewing, and children don't always complain clearly even when a tooth is badly affected. Leaving it untreated simply because it will eventually fall out isn't always the safest option.",
      },
      {
        question: "What is a pulpectomy and when is it needed for a child's tooth?",
        answer:
          "A pulpectomy removes infected or damaged tissue from inside a primary tooth, disinfects the canals, and restores the tooth so it can keep functioning. It's recommended when a tooth is restorable and still needs to remain in the mouth for a significant period before its natural shedding time.",
      },
    ],
  },
  {
    slug: "extraction-before-braces",
    title: "Do I Need Teeth Removed Before Braces? Do Teeth Always Need to Be Extracted for Orthodontic Treatment?",
    excerpt:
      "“My teeth are crowded — does that mean I have to remove teeth before braces?” Not necessarily. Here's how orthodontists actually decide.",
    category: "Orthodontics",
    readingTime: "4 min read",
    publishedAt: "2026-09-01",
    image: "/images/blog/extraction-before-braces.jpg",
    keywords: [
      "do I need teeth removed for braces",
      "tooth extraction before orthodontic treatment",
      "is extraction necessary for crowded teeth",
    ],
    content: [
      p("“My teeth are crowded. Does that mean I have to remove teeth before braces?” Not necessarily."),
      h2("Do I need to remove teeth before getting braces?"),
      p("Orthodontic treatment is not simply about making teeth look straight. Before deciding how to create space, the dentist or orthodontist considers several factors—including the amount of crowding, jaw size, facial profile, bite, age, growth pattern, position of the teeth and available space."),
      p("Depending on the individual case, treatment may involve braces or aligners along with approaches such as expansion, growth modification in growing children, space management, or other orthodontic techniques."),
      p("In some cases, however, extraction really is the appropriate option. Severe crowding, certain bite relationships, tooth positions or facial considerations can make extraction-based orthodontic treatment a reasonable choice."),
      p("That is why there is no universal rule saying: “Never remove teeth for braces.” And there shouldn't be a universal rule saying: “Crowding means four teeth must be removed.”"),
      p("Modern orthodontic treatment should be individualized."),
      p("Before removing healthy permanent teeth, understand why the extraction has been recommended, what alternatives are appropriate for your case, and what the expected advantages and limitations of each option are."),
      p("Your smile is not just a row of teeth. Treatment planning should consider your teeth, jaws, bite and facial structure together."),
    ],
    faqs: [
      {
        question: "Do I need to remove teeth before braces?",
        answer:
          "Not necessarily. Whether extraction is needed depends on factors like the amount of crowding, jaw size, facial profile, bite, age, and available space. Many cases are managed with expansion, growth modification, or space management instead — extraction is only recommended when it's genuinely the appropriate option for that individual case.",
      },
      {
        question: "Why do some orthodontic patients need extractions and others don't?",
        answer:
          "Orthodontic treatment should be individualized. Factors such as severe crowding, certain bite relationships, tooth positions, and facial considerations can make extraction-based treatment reasonable for one patient, while another with similar crowding may be treated without removing any teeth.",
      },
    ],
  },
  {
    slug: "dental-myths-root-canals-wisdom-teeth-xrays",
    title: "Dental Myths We Hear Every Day: Root Canals, Wisdom Teeth & X-Rays",
    excerpt:
      "Dental treatment is surrounded by stories passed from one person to another. Let's clear up a few common misconceptions about root canals, wisdom teeth, and X-rays.",
    category: "Dental Myths",
    readingTime: "5 min read",
    publishedAt: "2026-09-01",
    image: "/images/blog/dental-myths-root-canals-wisdom-teeth-xrays.webp",
    keywords: ["does root canal cause disease", "should impacted wisdom tooth be removed", "are dental x-rays safe"],
    content: [
      p("Dental treatment is surrounded by stories passed from one person to another. Let's clear up a few common misconceptions."),
      h2("MYTH: “Root canal treatment causes diseases elsewhere in the body.”"),
      p("Modern root canal treatment is performed to remove infected or inflamed tissue from inside a tooth, disinfect the root canal system and preserve a tooth that may otherwise need extraction. Claims that properly performed root canal treatment routinely causes systemic disease are not supported by current mainstream dental evidence."),
      h2("MYTH: “If a wisdom tooth is impacted, remove it immediately.”"),
      p("Not every impacted wisdom tooth automatically needs removal. Its position, symptoms, surrounding gum and bone, effect on the neighboring tooth, pathology and future risk all need to be considered. Some impacted teeth require removal, while others may simply require periodic monitoring."),
      h2("MYTH: “I don't want a dental X-ray because radiation is dangerous.”"),
      p("Dental X-rays do involve ionizing radiation, so they should be prescribed only when clinically justified. Modern dental imaging uses relatively low radiation doses, and dentists aim to keep exposure as low as reasonably achievable while obtaining the information needed for diagnosis and treatment."),
      p("X-rays can reveal information that cannot always be seen during a routine examination—including decay between teeth, root conditions, bone changes, developing teeth and the position of impacted teeth."),
      p("One important clarification: mobile phones and televisions are not equivalent to dental X-rays. They involve non-ionizing electromagnetic radiation, while X-rays are ionizing radiation. Comparing them directly can therefore be misleading."),
      p("The better question is not simply, “Is there radiation?” It is: “Is this X-ray necessary for my diagnosis or treatment?”"),
      p("When in doubt, ask your dentist why an investigation or treatment has been recommended. Good dentistry starts with understanding—not fear."),
    ],
    faqs: [
      {
        question: "Does root canal treatment cause disease in other parts of the body?",
        answer:
          "No. Modern root canal treatment removes infected or inflamed tissue from inside a tooth, disinfects the root canal system, and preserves a tooth that may otherwise need extraction. Claims that properly performed root canal treatment routinely causes systemic disease are not supported by current mainstream dental evidence.",
      },
      {
        question: "Should every impacted wisdom tooth be removed?",
        answer:
          "Not automatically. Its position, symptoms, surrounding gum and bone, effect on the neighboring tooth, pathology, and future risk all need to be considered. Some impacted teeth require removal, while others may simply need periodic monitoring.",
      },
      {
        question: "Are dental X-rays safe?",
        answer:
          "Dental X-rays involve ionizing radiation, so they're prescribed only when clinically justified, using relatively low doses kept as low as reasonably achievable. They can reveal decay between teeth, root conditions, bone changes, and impacted teeth that aren't visible during a routine exam — information that's often essential for an accurate diagnosis.",
      },
    ],
  },
  {
    slug: "save-tooth-or-extract",
    title: "Save the Tooth or Pull It Out? Root Canal vs Extraction — Think Beyond Today's Pain",
    excerpt:
      "“Doctor, just remove it.” We hear this surprisingly often — but is root canal or extraction actually the better choice? The cheapest decision today isn't always the simplest one over the next 10 or 20 years.",
    category: "Restorative Dentistry",
    readingTime: "5 min read",
    publishedAt: "2026-09-01",
    image: "/images/blog/save-tooth-or-extract.webp",
    keywords: [
      "root canal vs extraction",
      "should I save or remove my tooth",
      "is root canal or extraction better",
    ],
    content: [
      p("“Doctor, just remove it.” We hear this surprisingly often."),
      p("When a tooth is painful, extraction may appear to be the quickest and easiest solution. It can also seem less expensive initially than root canal treatment followed by restoration."),
      h2("Should I save my tooth with a root canal, or get it extracted?"),
      p("But there is one important question to ask before removing a permanent tooth: Can this tooth be predictably saved?"),
      p("Your natural teeth are designed for chewing, speaking and maintaining your bite. Once a permanent tooth is extracted, it will not grow back."),
      p("When a tooth is removed, the space left behind may eventually affect chewing and the position of surrounding or opposing teeth. Depending on the location and individual situation, replacing the missing tooth with an implant, bridge, denture or another appropriate option may later be recommended."),
      p("That means the “cheapest and easiest” decision today isn't necessarily the simplest decision over the next 10 or 20 years."),
      p("If a tooth has an infected or damaged pulp but has adequate remaining tooth structure and a reasonable prognosis, root canal treatment followed by an appropriate restoration may allow the natural tooth to remain functional."),
      p("However, saving a tooth at any cost is not good dentistry either. A severely fractured tooth, advanced periodontal disease, inadequate remaining tooth structure, certain root fractures, extensive infection or a tooth with a very poor prognosis may genuinely require extraction."),
      p("So the question should not be: “Root canal or extraction—which is cheaper today?” Instead ask: “What is the long-term prognosis of this tooth, and what happens if I remove it?”"),
      p("And most importantly, the decision to remove your tooth should be based on your clinical condition, prognosis and informed choice—not fear, convenience, myths or pressure from someone else."),
      p("Sometimes extraction is the right treatment. Sometimes saving the tooth is the right treatment. But once a natural tooth is removed, that decision cannot be reversed."),
      p("So before saying, “Just pull it out,” understand your options. Save when it is worth saving. Remove when it truly needs to be removed."),
    ],
    faqs: [
      {
        question: "Is root canal treatment or tooth extraction better?",
        answer:
          "It depends on the tooth's condition. If a tooth has an infected or damaged pulp but adequate remaining structure and a reasonable prognosis, root canal treatment followed by restoration can keep the natural tooth functional. But a severely fractured tooth, advanced periodontal disease, or a very poor prognosis may genuinely require extraction. The right choice depends on long-term prognosis, not which option is cheaper today.",
      },
      {
        question: "What happens if I extract a tooth instead of saving it?",
        answer:
          "Once a permanent tooth is extracted, it will not grow back. The space left behind may eventually affect chewing and the position of surrounding or opposing teeth, and replacing it later with an implant, bridge, or denture may be recommended — which is often more involved than treating the original tooth would have been.",
      },
    ],
  },
  {
    slug: "dental-surgery-dont-be-scared",
    title: "“Dental Surgery”: Don't Let the Word “Surgery” Scare You",
    excerpt:
      "Hearing “surgical extraction” can feel alarming — but the word “surgery” simply describes a procedure that needs careful access to a tooth. Here's what actually happens.",
    category: "Oral Surgery",
    readingTime: "5 min read",
    publishedAt: "2026-10-08",
    image: "/images/blog/dental-surgery-dont-be-scared.jpg",
    keywords: ["is surgical tooth extraction painful", "what is a surgical extraction", "dental surgery anxiety"],
    content: [
      p("When you hear the words “surgical extraction” or “dental surgery,” it is completely natural to feel anxious. But the word “surgery” does not necessarily mean something frightening or dangerous. In dentistry, it often simply describes a procedure that requires careful access to a tooth or surrounding tissue."),
      h2("When does a tooth need to be removed?"),
      p("A tooth may be considered for extraction when:"),
      list([
        "It is severely damaged or decayed and has a poor prognosis",
        "It cannot be predictably restored",
        "It is causing repeated infection or other problems",
        "It is preventing another tooth from erupting or reaching its normal position",
        "It is causing damage to neighbouring teeth or surrounding structures",
        "It is impacted, meaning it is unable to erupt normally",
        "Its position makes preservation impractical or unsafe",
      ]),
      p("And importantly: extraction is not always the first choice. When a tooth can be predictably saved and restored, preserving the natural tooth is generally preferred."),
      h2("Why is an extraction sometimes called “surgery”?"),
      p("For a straightforward extraction, the tooth may be loosened and removed through the normal opening in the mouth. But when a tooth is deeply impacted, partially covered by gum, or surrounded by bone, the dentist may need to:"),
      list([
        "Numb the area with local anaesthesia",
        "Carefully access the tooth through the gum",
        "Remove a small amount of surrounding bone when necessary",
        "Divide the tooth into smaller portions if that makes removal safer",
        "Gently remove the tooth",
        "Clean the area",
        "Place stitches when required",
      ]),
      p("That additional access to the gum and/or bone is why the procedure is called a surgical extraction."),
      h2("“Will it hurt?”"),
      p("The procedure is performed under local anaesthesia, so the area being treated is numbed before treatment begins. You may feel pressure, movement or vibration, but you should not normally feel sharp pain during the procedure. If you are anxious, discuss your concerns with your dentist before treatment."),
      h2("What if I am very anxious?"),
      p("For appropriately selected patients, conscious sedation may be considered to help reduce anxiety and make the dental experience more comfortable."),
      p("It doesn't replace local anaesthesia—the treatment area is still numbed. Instead, sedation can help an anxious patient feel calmer and more relaxed while remaining responsive."),
      h2("What if the case is complicated?"),
      p("Some extractions are straightforward. Others require advanced surgical planning, particularly when a tooth is deeply impacted, close to important anatomical structures, or associated with other complications."),
      p("In such situations, an oral and maxillofacial surgeon may be involved. At Tuskaè, complicated cases can be appropriately assessed and referred or managed with specialist support when needed."),
      h2("The key message"),
      p("A surgical extraction is not something to fear simply because it contains the word “surgery.”"),
      p("It is a carefully planned procedure performed to remove a problematic tooth while protecting the surrounding tissues and structures as much as possible."),
      p("The decision to remove a tooth should be based on its condition, prognosis, position and effect on your oral health—not simply on the fact that it is causing discomfort today."),
      p("Have a tooth that has been advised for extraction? Don't panic. Visit Tuskaè, let us evaluate whether it needs to be removed, whether it can be saved, and what the safest treatment option is for you."),
    ],
    faqs: [
      {
        question: "Is a surgical tooth extraction painful?",
        answer:
          "The procedure is performed under local anaesthesia, so the area is numbed before treatment begins. You may feel pressure, movement, or vibration, but you should not normally feel sharp pain during the procedure.",
      },
      {
        question: "Does every impacted or difficult tooth need surgery?",
        answer:
          "No. A tooth is only considered for extraction when it is severely damaged, cannot be predictably restored, is causing repeated infection, is blocking another tooth, or its position makes preservation impractical. When a tooth can be predictably saved and restored, preserving it is generally preferred.",
      },
    ],
  },
  {
    slug: "after-surgical-tooth-removal-aftercare",
    title: "After a Surgical Tooth Removal — What Should You Expect?",
    excerpt:
      "Surgical tooth removal doesn't end when the tooth is removed. Here's what's normal during recovery, how to protect the blood clot, and when to call your dentist.",
    category: "Oral Surgery",
    readingTime: "6 min read",
    publishedAt: "2026-10-08",
    image: "/images/blog/after-surgical-tooth-removal-aftercare.jpg",
    keywords: [
      "tooth extraction aftercare",
      "dry socket symptoms",
      "what to eat after tooth extraction",
      "surgical extraction recovery",
    ],
    content: [
      p("Surgical tooth removal doesn't end when the tooth is removed. Proper aftercare helps the blood clot remain undisturbed, reduces the risk of complications, and supports comfortable healing."),
      h2("1. The First Few Hours — What Is Normal?"),
      list([
        "Mild bleeding or oozing",
        "Feeling numb from local anaesthesia",
        "Mild soreness",
        "Bite gently on the gauze as instructed",
        "Avoid repeatedly spitting or disturbing the area",
      ]),
      h2("2. The Blood Clot Is Your Body's Natural Bandage"),
      p("Avoid forceful spitting, gargling, drinking fluids via straw, and touching the clot with your tongue or fingers. If the initial clot dislodges, the socket can become exposed to the outside environment and get reinfected or become a painful dry socket."),
      h2("3. What Is Dry Socket?"),
      p("When the clot dislodges, the area becomes devoid of protection and hydration, which causes severe pain and swelling."),
      h2("4. Swelling — Don't Panic"),
      list([
        "Some swelling can be expected",
        "It may increase during the first couple of days before gradually settling",
        "Cold compresses may be advised during the early period",
        "Take prescribed medicines as directed",
      ]),
      h2("5. Eating After Surgery"),
      list([
        "Start with soft, comfortable foods",
        "Avoid very hot foods/drinks while numb",
        "Chew away from the surgical area when possible",
        "Gradually return to normal food as comfort allows",
      ]),
      h2("6. Brushing and Rinsing"),
      list([
        "Continue oral hygiene",
        "Be gentle around the surgical site",
        "Don't aggressively brush the wound",
        "Follow the dentist's instructions regarding mouth rinses",
      ]),
      h2("7. Stitches — What Happens to Them?"),
      p("If the extraction area is stitched: for dissolvable stitches, keep the area clean and hygienic — they dissolve gradually. For non-dissolvable stitches, don't try to remove them prematurely; wait until the time period your dentist has advised, then have them removed by the dentist."),
      h2("8. What Should You Avoid?"),
      list([
        "Smoking/tobacco",
        "Alcohol",
        "Vigorous rinsing",
        "Spitting repeatedly",
        "Straws/suction",
        "Heavy exercise immediately after surgery",
        "Touching the wound with fingers or tongue",
      ]),
      h2("9. What Is Normal vs What Is Not?"),
      p("Usually expected: mild pain, mild swelling, slight blood staining or oozing, and temporary difficulty opening the mouth, particularly after difficult procedures."),
      p("Contact your dentist if you notice:"),
      list([
        "Bleeding that doesn't settle despite appropriate pressure",
        "Increasing rather than improving pain",
        "Significant or worsening swelling",
        "Fever or feeling unwell",
        "Pus or foul discharge",
        "Difficulty swallowing or breathing",
        "Persistent numbness or other unusual symptoms",
      ]),
      h2("10. Follow-Up Matters"),
      p("Follow-up may be required depending on the type of extraction, sutures, infection, bone grafting or other procedures, healing, and the need for replacement of the missing tooth."),
      p("Every extraction has a healing journey. A little care during the first few days can make that journey much smoother. If something doesn't feel right, don't simply wait and worry—contact your dentist and get it checked."),
      p("Had a surgical tooth removal or been advised to undergo one? At Tuskaè, we believe in explaining the procedure, preparing you for recovery, and supporting you throughout the healing process."),
    ],
    faqs: [
      {
        question: "What is dry socket and how do I avoid it?",
        answer:
          "Dry socket happens when the protective blood clot in the extraction site dislodges, leaving the area exposed and causing severe pain and swelling. Avoid forceful spitting, gargling, drinking through a straw, smoking, and touching the area with your tongue or fingers to keep the clot intact.",
      },
      {
        question: "What should I eat after a tooth extraction?",
        answer:
          "Start with soft, comfortable foods, avoid very hot foods or drinks while you're still numb, chew away from the surgical area when possible, and gradually return to normal food as comfort allows.",
      },
      {
        question: "When should I contact my dentist after an extraction?",
        answer:
          "Contact your dentist if you notice bleeding that doesn't settle despite pressure, pain that is increasing rather than improving, significant or worsening swelling, fever or feeling unwell, pus or foul discharge, difficulty swallowing or breathing, or persistent numbness.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
