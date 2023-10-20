import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered PDF Summarizing
        </span>
      </h1>
      <p className="desc text-center">
        Step into the future of innovation with Researchtopia, your next-gen
        workspace where ideas transform into discoveries at lightning speed! Our
        platform isn't just an app; it's a dynamic research powerhouse, designed
        by researchers for researchers.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
