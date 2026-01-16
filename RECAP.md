# Becoming You Labs Project Recap 

Overall, this was pretty straight-forward and fun assessment. I spent 4-5 hours on it. I enjoyed that it feels like something one would actually do in the day-to-day of BYL. I appreciate that the Next.js project was already set up so I didn't need to spend time scaffolding. 

I was a bit confused about how to determine which content you see for the role level. I used my best judgement. Would love to chat about that.

i'd love to spend more time on it to make it perfect, but I'm also happy with where it is at currently. 

Thanks for the opportunity!

#### Below are some standout decisions. 


## 🏗️ Architecture & State Management
I wanted to keep as much of the components as I could as Server components. 

* **URL-Driven State:** The "Active Role" is managed via Next.js `searchParams`. This allows:
    * Deep linking (sharing a specific role URL).
    * Persistence of the active role on page refresh.

## 🛠️ Component Design

### Polymorphic Navigation Components
I tried to really lean into making the common components, reusable and DRY. The `Button` and `NavButton` components are designed to be polymorphic, capable of rendering as either a Next.js `Link` or a standard HTML `button`.


## 🚀 Future Improvements

* **Improve A11y:** Right now the role cards are not accessible by keyboard, as well as other general accessibility improvements. 

* **Improve Animations:** The movements of the cards are smooth, But it can be better. I'd love to improve the approach, by maybe using more gpu-accelerated css properties or an animation library, albeit overkill for this project. 


