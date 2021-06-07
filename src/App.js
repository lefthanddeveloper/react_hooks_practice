import React, { useEffect, useRef, useState } from "react";

//#region useTabs example
// const content = [
//   {
//     tab: "Section 1",
//     content: "This is Section 1 content",
//   },
//   {
//     tab: "Section 2",
//     content: "This is Section 2 content",
//   },
//   {
//     tab: "Section 3",
//     content: "This is Section 3 content",
//   },
// ];

// const useTabs = (initialIndex, allTabs) => {
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   const [currentIndex, setCurrentIndex] = useState(initialIndex);
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setCurrentIndex,
//   };
// };

// function App(){
// const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <>
//       {content.map((item, index) => (
//         <button
//           onClick={() => {
//             changeItem(index);
//           }}
//         >
//           {item.tab}
//         </button>
//       ))}
//       <div>{currentItem.content}</div>
//     </>
//   );
// }
//#endregion

//#region useInput example
// function App() {
// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };
// const maxLengthValidator = (value) => value.length <= 10;
// const name = useInput("Mr.", maxLengthValidator);
// return (
//   <>
//     <div>Hello</div>
//     <input placeholder="" {...name}></input>
//   </>
// );
// }
//#endregion
//#region useEffect basic example...
//function App(){
// const logging = () => {
//   console.log("useEffect log");
// };
// const [firstNum, setFirstNum] = useState(0);
// const [secondNum, setSecondNum] = useState(0);
// const increase = (n, fn) => {
//   fn(n + 1);
// };
// useEffect(logging, [secondNum]);
// return (
//   <>
//     <div>Test</div>
//     <button
//       onClick={() => {
//         increase(firstNum, setFirstNum);
//       }}
//     >
//       {firstNum}
//     </button>
//     <button
//       onClick={() => {
//         increase(secondNum, setSecondNum);
//       }}
//     >
//       {secondNum}
//     </button>
//   </>
// );
// }

//#endregion

//#region useTitle with useEffect
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);

//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   };
//   useEffect(updateTitle, [title]);
//   return setTitle;
// };

// function App() {
//   const titleUpdator = useTitle("Loading...");

//   setTimeout(() => {
//     titleUpdator("Title");
//   }, 500);
//   return <div>Test</div>;
// }
//#endregion

//#region useClick with useEffect
// const useClick = (onClickMethod) => {
//   // if (typeof onClickMethod !== "function") return;
//   const element = useRef();

//   useEffect(() => {
//     //여기는 componentDidMount 때만 호출 된다 (다음 paramter로 [] 를 보내기때문에; 만약에 [] 가 없으면 componentUpdate 때도 호출된다.)
//     if (element.current) {
//       console.log("Add Event Listener on useEffect ");
//       element.current.addEventListener("click", onClickMethod);
//     }

//     //아래 return 은 componentWillUnmount 때 호출이 된다.
//     return () => {
//       if (element.current) {
//         console.log("Remove Event Listener on useEffect ");
//         element.current.removeEventListener("click", onClickMethod);
//       }
//     };
//   }, []);

//   return element;
// };

// function App() {
//   const onClick = () => {
//     console.log("CLicked!");
//   };

//   const title = useClick(onClick);

//   return (
//     <div>
//       <h1 ref={title}>Click Test</h1>
//     </div>
//   );
// }
//#endregion

//#region useConfirmation
// const useConfirmation = (message = "", onConfirm, onCancel) => {
//   if (!onConfirm || typeof onConfirm !== "function") return;
//   if (typeof onCancel !== "function") return;
//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       onConfirm();
//     } else {
//       onCancel();
//     }
//   };

//   return confirmAction;
// };

// function App() {
//   const deleteWorld = () => {
//     console.log("Delete the world");
//   };
//   const reject = () => {
//     console.log("rejected");
//   };
//   const confirmDelete = useConfirmation("Are you sure", deleteWorld, reject);

//   return <button onClick={confirmDelete}>Confirm Test</button>;
// }
//#endregion

//#region usePreventLeave
// const usePreventLeave = () => {
//   const listener = (event) => {
//     event.preventDefault();
//     event.returnValue = "";
//   };
//   const enablePrevent = () => window.addEventListener("beforeunload", listener);
//   const disablePrevent = () =>
//     window.removeEventListener("beforeunload", listener);
//   return { enablePrevent, disablePrevent };
// };

// function App() {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div>
//       <div> Prevent Leave</div>
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>UnProtect</button>
//     </div>
//   );
// }
//#endregion

//#region useBeforeLeave (mouse cursor)
// const BeforeLeave = (onLeave) => {
//   const handle = (event) => {
//     onLeave();
//   };

//   useEffect(() => {
//     document.addEventListener("mouseleave", handle);

//     return () => {
//       document.removeEventListener("mouseleave", handle);
//     };
//   }, []);
// };

// function App() {
//   const begForLife = () => console.log("Pls don't leave");
//   BeforeLeave(begForLife);
//   return <div>Before mouse leave</div>;
// }
//#endregion

//#region useFadeIn
// const useFadeIn = (duration = 1, delay = 0) => {
//   const element = useRef();

//   useEffect(() => {
//     console.log(element.current);
//     if (element.current) {
//       const { current } = element;
//       current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
//       current.style.opacity = 1;
//     }
//   }, []);

//   return { ref: element, style: { opacity: 0 } };
// };

// function App() {
//   const h1FadeIn = useFadeIn(4, 0);
//   const pFadeIn = useFadeIn(5, 2);
//   return (
//     <div>
//       <h1 {...h1FadeIn}>Fade In</h1>
//       <p {...pFadeIn}>Contents Fade in</p>
//     </div>
//   );
// }
//#endregion

//#region useNetwork
// const useNetwork = (onChange) => {
//   const [status, setStatus] = useState(navigator.onLine);

//   const handleChange = () => {
//     onChange(navigator.onLine);
//     setStatus(navigator.onLine);
//   };

//   useEffect(() => {
//     window.addEventListener("online", handleChange);
//     window.addEventListener("offline", handleChange);

//     return () => {
//       window.removeEventListener("online", handleChange);
//       window.removeEventListener("offline", handleChange);
//     };
//   });

//   return status;
// };

// function App() {
//   const onChange = (online) => {
//     console.log(online ? "It's online" : "It's Offline");
//   };

//   const online = useNetwork(onChange);

//   return (
//     <>
//       <div>{online ? "It's Online" : "It's Offline"}</div>
//     </>
//   );
// }
//#endregion

//#region useScroll
// const useScroll = () => {
//   const [state, setState] = useState({ x: 0, y: 0 });

//   const onScroll = () => {
//     console.log(window.scrollY);
//     setState({ x: window.scrollX, y: window.scrollY });
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return state;
// };

// function App() {
//   const { y } = useScroll();

//   return (
//     <div style={{ height: 2000 }}>
//       <div style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
//         Use Scroll
//       </div>
//     </div>
//   );
// }
//#endregion
//#region useFullScreen
// const useFullScreen = (onFullScreen) => {
//   const element = useRef();

//   const triggerFullScreen = () => {
//     element.current.requestFullscreen();
//     onFullScreen();
//   };
//   return { element, triggerFullScreen };
// };

// function App() {
//   const onFullScreen = () => {
//     console.log("Full screen");
//   };

//   const { element, triggerFullScreen } = useFullScreen(onFullScreen);

//   return (
//     <div>
//       <img
//         style={{ width: 500 }}
//         ref={element}
//         src="https://cdn.filestackcontent.com/6TEyGWuvTJuVl0VVx4Jq/convert?cache=true&crop=24%2C0%2C1713%2C856&crop_first=true&quality=90&w=1920"
//       ></img>
//       <button onClick={triggerFullScreen}>Make FullScreen</button>
//     </div>
//   );
// }
//#endregion

//#region useNotification
// const useNotification = (title, options) => {
//   if (!("Notification" in window)) {
//     console.log("no notification in the window");
//     return;
//   }

//   const fireNotification = () => {
//     if (Notification.permission !== "granted") {
//       Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//           new Notification(title, options);
//         }
//       });
//     } else {
//       const noti = new Notification(title, options);
//       console.log(noti);
//     }
//   };
//   return fireNotification;
// };

// function App() {
//   const triggerNotif = useNotification("Hi", { body: "This is Notification" });
//   return (
//     <div>
//       <button onClick={triggerNotif}>Fire Notification</button>
//     </div>
//   );
// }
//#endregion

//#region useAxios
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  // if (!opts.url) {
  //   return;
  // }

  useEffect(() => {
    axiosInstance(opts)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { state, refetch };
};

function App() {
  const {
    state: { loading, error, data },
    refetch,
  } = useAxios({
    url: "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating",
  });

  console.log(`Loading: ${loading}\n error: ${error}\n data: ${data}`);
  return (
    <div>
      <div>use Axios</div>
      <div>{data && data.status}</div>
      <div>{loading && "Loading"}</div>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
//#endregion
export default App;
