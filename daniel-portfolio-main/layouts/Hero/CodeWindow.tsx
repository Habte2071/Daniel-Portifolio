import "@fontsource/fira-code";

const createDeveloperProfile = () => {
  const name = "Daniel Elias";
  const role = "Creative Web Developer";
  const skills = ["HTML", "CSS", "JS", "React", "Next.js", "Node.js"];
  const hobbies = ["Coding", "Debugging", "Testing"];

  const introduce = () => {
    console.log("Hello, World!");
    console.log(`I'm ${name}, your friendly ${role}.`);
    console.log(`My skills include: ${skills.join(", ")}.`);
    console.log(`In my free time, I enjoy: ${hobbies.join(", ")}.`);
  };

  return { introduce };
};

const CodeWindow = () => {
  const developerProfile = createDeveloperProfile();

  return (
    <div className="relative flex w-full overflow-hidden bg-gray-800 shadow-2xl rounded-lg">
      <div className="relative flex w-full flex-col p-4">
        <div className="flex-none border-b border-gray-600">
          <div className="flex h-8 items-center space-x-1.5 px-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="relative flex min-h-0 flex-auto flex-col">
          <div className="flex min-h-0 w-full flex-auto overflow-auto">
            <div className="relative w-full flex-auto">
              <pre className="flex min-h-full text-sm leading-6">
                <div
                  aria-hidden="true"
                  className="w-[50px] select-none text-wrap px-4 py-4 text-gray-500 md:block"
                  style={{ fontFamily: "Fira Code, monospace" }}
                >
                  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
                </div>
                <code
                  className={`relative flex flex-col overflow-auto px-4 pb-4 pt-4 text-gray-200`}
                  style={{ fontFamily: "Fira Code, monospace" }}
                >
                  <span>
                    <span className="text-teal-400">{`const`}</span>
                    <span className="text-blue-300">{` createDeveloperProfile = () => {`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  const name =`}</span>
                    <span className="text-green-400">{` "Daniel Elias";`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  const role =`}</span>
                    <span className="text-green-400">{` "Creative Web Developer";`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  const skills = `}</span>
                    <span className="text-purple-300">{`[`}</span>
                    <span className="text-green-400">{`"HTML", "CSS", "JS", "React", "Next.js", "Node.js"`}</span>
                    <span className="text-purple-300">{`]`}</span>
                    <span className="text-green-400">{`;`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  const hobbies = `}</span>
                    <span className="text-purple-300">{`[`}</span>
                    <span className="text-green-400">{`"Coding", "Debugging", "Testing"`}</span>
                    <span className="text-purple-300">{`]`}</span>
                    <span className="text-green-400">{`;`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  const introduce = () => {`}</span>
                  </span>
                  <span>
                    <span className="text-orange-300">{`    console.log(`}</span>
                    <span className="text-green-400">{`"Hello, World!"`}</span>
                    <span className="text-orange-300">{`);`}</span>
                  </span>
                  <span>
                    <span className="text-orange-300">{`    console.log(`}</span>
                    <span className="text-green-400">
                      {` \`I'm ${`\${name}`}, your friendly ${`\${role}`}.`}</span>
                    <span className="text-orange-300">{`);`}</span>
                  </span>
                  <span>
                    <span className="text-orange-300">{`    console.log(`}</span>
                    <span className="text-green-400">
                      {` \`My skills include: ${`\${skills.join(", ")}`}.`}</span>
                    <span className="text-orange-300">{`);`}</span>
                  </span>
                  <span>
                    <span className="text-orange-300">{`    console.log(`}</span>
                    <span className="text-green-400">
                      {` \`In my free time, I enjoy: ${`\${hobbies.join(", ")}`}.`}</span>
                    <span className="text-orange-300">{`);`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  };`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`  return { introduce };`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`};`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`const developerProfile = createDeveloperProfile();`}</span>
                  </span>
                  <span>
                    <span className="text-teal-400">{`developerProfile.introduce();`}</span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;