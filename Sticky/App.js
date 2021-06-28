import { useEffect,useRef } from "react";
import "./styles.css";

export default function App() {
  const header = useRef(null);
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
    var sticky = header.current.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.current.classList.add("sticky");
      } else {
        header.current.classList.remove("sticky");
      }
    }
  });
  return (
    <div className="App">
      <div className="top-container">
        <h1>Scroll Down</h1>
        <p>Scroll down to see the sticky effect.</p>
      </div>

      <div className="header" ref={header}>
        <h2>My Header</h2>
      </div>

      <div className="content">
        <h3>On Scroll Sticky Header</h3>
        <p>
          The header will stick to the top when you reach its scroll position.
        </p>
        <p>Scroll back up to remove the sticky effect.</p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>{" "}
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
      </div>
    </div>
  );
}
