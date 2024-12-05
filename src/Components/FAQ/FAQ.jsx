
const FAQ = () => {
      return (
            <div className=" flex flex-col md:flex-row w-11/12 md:w-full mx-auto items-center justify-between gap-14">
                  <div>
                        <img src="https://i.ibb.co/PxZJzCn/image.png" alt="" />
                  </div>
                  <div className=" flex flex-col gap-4 w-full">
                        <div className="collapse collapse-arrow bg-base-200">
                              <input type="radio" name="my-accordion-2" defaultChecked />
                              <div className="collapse-title text-xl font-medium">1.What is RaiseHub</div>
                              <div className="collapse-content">
                                    <p>RaiseHub is a crowdfunding platform where you can raise funds for personal, startup, or creative projects. It provides an easy and effective way to bring your ideas to life with the support of a global community.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title text-xl font-medium">2. How do I start a campaign?</div>
                              <div className="collapse-content">
                                    <p>{`To start a campaign, you need to create an account on our website. Then, go to the "Start a Campaign" page, fill in the required information like campaign title, description, image, donation goal, and deadline. Once submitted, your campaign will be live!`}</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title text-xl font-medium">3. What types of campaigns can I create?</div>
                              <div className="collapse-content">
                                    <p>{`
                                    You can create campaigns for various purposes, such as:

                                 Personal Issues: Medical expenses, emergencies, etc.
                                   Startups: Launching a new business or product.
                                      Creative Ideas: Projects like films, art, or digital creations.
                                   Social Causes: Environmental protection, social welfare, etc.`}</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title text-xl font-medium">4. How can I donate to a campaign?</div>
                              <div className="collapse-content">
                                    <p>{`
                                   To donate to a campaign, simply go to the campaign page and click the “Donate” button. Choose your preferred payment method, enter the amount, and submit the donation.`}</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title text-xl font-medium">5. What happens if a campaign reaches its goal?</div>
                              <div className="collapse-content">
                                    <p>{`
                                   Once a campaign reaches its funding goal, the collected funds are transferred to the campaign owner. If the goal isn’t reached by the deadline, the campaign may not receive any funds, depending on the platform's terms.`}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FAQ;