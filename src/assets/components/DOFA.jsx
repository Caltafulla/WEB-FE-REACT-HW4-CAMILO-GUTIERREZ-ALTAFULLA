function DOFA({ content }) {
  return (
    <div className="flex flex-wrap justify-center w-300">
      {content.map((category) => (
        <div
          key={category.id}
          className="bg-hfcolor w-2/5 mx-3 my-3 rounded-lg h-120"
        >
          <h2 className="font-bold mb-1 mt-3 text-center justify-center text-txtcolor">
            {category.type}
          </h2>
          <ul>
            {category.items.map((item) => (
              <li
                className="font-light mb-3 mx-8 list-disc text-txtcolor"
                key={item.id}
              >
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DOFA;
