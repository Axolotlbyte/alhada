const serviceCard = () => {
  return (
    <div className="w-full">
      <div>
        <Image
          src="/images/service.png"
          alt="Service Image"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <h2>Laundry</h2>
        <p>
          Feel safe around the clock with gated access, surveillance, and
          trained security personnel dedicated to your peace of mind.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <serviceCard />
    </section>
  );
};

export default Services;
