

const News = () => {

   const newsItems = [
    "Tech and Game Event Reveals Star-Studded Speaker List for 2023!",
    "Breaking News: Highly Anticipated Game 'Epic Quest' to Debut at Our Event!",
    "'AI in Gaming' Workshop Added to Event Schedule!",
    "Hurry! Early Bird Tickets for Our Tech and Game Event Are Officially Sold Out!",
    "Event Recap: Key Takeaways from 'Future of Virtual Reality' Panel Discussion.",
    "Sponsors Announce Exclusive Discounts and Swag for Event Attendees!",
    "Can't Attend in Person? Watch Event Livestream Here!",
    "'Gamer's Gauntlet' Tournament Announced for Event!",
    "Important Update: Event Schedule Adjustments for Day 2.",
    "What Attendees Are Saying About Our Tech and Game Event."
  ];

  return (
    <div className="text-xl items-center justify-center flex flex-col mb-10">
      <h2 className="text-3xl italic border-b-2">Breaking News</h2>
      <ul>
        {newsItems.map((item, index) => (
          <li className="text-amber-500 " key={index}> {index}={item}</li>
        ))}
      </ul>
    </div>
    );
};

export default News;