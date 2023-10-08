
const Account = () => {
    return (
        <div className="flex items-center justify-center flex-col mb-10">
<div className="flex"> 
 

<div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Change Name?</span> 
      <input type="checkbox" className="toggle toggle-primary" checked />
    </label>
  </div>
  
</div>

<div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Change Profile Picture?</span> 
      <input type="checkbox" className="toggle toggle-primary" checked />
    </label>
  </div>

  <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Update Email?</span> 
      <input type="checkbox" className="toggle toggle-primary" checked />
    </label>
  </div>
  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-purple-500 text-white " onClick={()=>document.getElementById('my_modal_5').showModal()}>Submit</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Thank You for your information</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-amber-500">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Account;