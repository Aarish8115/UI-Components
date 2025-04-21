function App() {
  return (
    <>
      <input
        className="bg-gray-600/40 hover:cursor-not-allowed"
        placeholder=" type here "
        disabled={true}
      />
      <input
        className="bg-gray-600/40 "
        placeholder=" type here "
        disabled={false}
      />
      <input
        className="p-3 m-2 focus:outline-none focus:border-2 focus:border-blue-500 focus:rounded-xl "
        placeholder=""
        disabled={false}
      />
      <div className="bg-green-600/30 text-green-700  border-2 border-green-600 p-6 text-base m-4 rounded-xl">
        This is a success alert.
      </div>
      <div>This is a danger alert.</div>
      <div>This is a info alert.</div>
      <div>This is a warning alert.</div>
      <div className="text-2xl  scale-90">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl ">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl scale-110">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl leading-relaxed">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl leading-loose">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <hr />
      <div className="text-2xl tracking-tighter">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl tracking-tight">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl tracking-normal">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl tracking-wide">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl tracking-wider">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-2xl tracking-widest">
        Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti corporis maiores vitae mollitia!
        Ullam fuga ducimus enim distinctio velit. Eos!
      </div>
      <div className="text-black svatopluk-light text-4xl wrap ">default</div>
      <div className="text-black svatopluk-regular text-4xl wrap ">default</div>
      <div className="svatopluk-medium text-8xl bg-black text-white">
        default
      </div>
      <div className="text-black svatopluk-semibold text-4xl wrap ">
        default
      </div>
      <div className="text-black svatopluk-bold text-4xl wrap ">default</div>
      <hr />
      <div className="text-black svatopluk-lightitalic text-4xl wrap ">
        default
      </div>
      <div className="text-black svatopluk-regularitalic text-4xl wrap ">
        default
      </div>
      <div className="text-black svatopluk-mediumitalic text-4xl wrap ">
        default
      </div>
      <div className="text-black svatopluk-semibolditalic text-4xl wrap ">
        default
      </div>
      <div className="text-black svatopluk-bolditalic text-4xl wrap ">
        default
      </div>
      <hr />
      <div className="text-gray-700">muted</div>
      <div className="text-blue-500">primary</div>
      <div className="text-green-700">secondary</div>
      <div className="noRM">accent</div>
      <hr />
      <div className="capitalize">capitalize</div>
      <div className="uppercase">uppercase</div>
      <div className="lowercase">lowerCasE</div>
      <hr />
      <div className="text-left">left</div>

      <div className="text-center">center</div>
      <div className="text-right">right</div>
      <div className="text-justify">justify</div>
    </>
  );
}

export default App;
