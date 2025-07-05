export default function Dashboard(){
    return(<>
    <h1>Dashboard</h1>
    <br/>
    <NamedExp/>
    <br/>
    <Dashboard12/>
    <SubDashbord/>
    <MySecretComponent/>
    </> )

}
export function NamedExp(){
    return <h1>i am named export </h1>
}
// app/dashboard/page.tsx
import { add, sub } from "../_lib/somemaths";
import { MySecretComponent } from "../_lib/mysecretcomp";

export  function Dashboard12() {
  return <div>2 + 3 = {add(2, 3)}</div>;
}
export function SubDashbord(){
    return <div>9-3={sub(9,3)}</div>
}

// module.exports={NamedExp}

// you're using module.exports inside a TypeScript + ES Module (ESM) file.
// Next.js (and modern React projects) use ESM, not CommonJS.

// So using module.exports = {} inside a .ts or .tsx file breaks conventions and may cause runtime issues.
//insted i have to use exprt function NamedExp

// | Behavior                                        | Explanation                                                       |
// | ----------------------------------------------- | ----------------------------------------------------------------- |
// | Calling components before they're defined       | ✅ Works because **functions are hoisted**                         |
// | Using imported modules before the `import` line | ✅ Works because **ESM imports are resolved before execution**     |
// | Looks like top-down but isn’t                   | ✅ React + ESM is module-based, not script-executed                |
// | `module.exports` vs `export`                    | ❌ `module.exports` breaks in ESM; use `export` / `export default` |


// <MySecretComponent /> // ✅ This is fine
// import { MySecretComponent } from '...';
// Even if visually, the import is below the usage — the compiler/bundler sees it all before execution.

// 🔍 JavaScript imports must be at the top level and are always hoisted by the module system. Unlike require(), they're not run line-by-line.