

const Services = ({service}) => {
    const {id,event_name,event_type,ticket_price,image_url}=service;
    return (
        <div>
           
            <div className="card w-96 bg-blue-100 mb-5 shadow-xl">
  <figure className="px-5 pt-5">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{event_name}</h2>
    <p>Type: {event_type}</p>
    <p>Price: {ticket_price}$</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-purple-500">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;