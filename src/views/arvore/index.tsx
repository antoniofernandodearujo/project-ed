import React, { useState } from "react";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

const TreeAnimation: React.FC = () => {
  const [values, setValues] = useState<number[]>([]);
  const [root, setRoot] = useState<Node | null>(null);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const addNode = (node: Node | null, value: number): Node => {
    if (!node) {
      return { value, left: null, right: null };
    }

    if (value < node.value) {
      node.left = addNode(node.left, value);
    } else if (value > node.value) {
      node.right = addNode(node.right, value);
    }

    return node;
  };

  const handleAddNode = () => {
    const newValue = getRandomValue();
    setValues((prevValues) => [...prevValues, newValue]);
    setRoot((prevRoot) => addNode(prevRoot, newValue));
  };

  const preOrderTraversal = (node: Node | null): number[] => {
    if (!node) return [];
    const result: number[] = [];
    result.push(node.value);
    result.push(...preOrderTraversal(node.left));
    result.push(...preOrderTraversal(node.right));
    return result;
  };

  const inOrderTraversal = (node: Node | null): number[] => {
    if (!node) return [];
    const result: number[] = [];
    result.push(...inOrderTraversal(node.left));
    result.push(node.value);
    result.push(...inOrderTraversal(node.right));
    return result;
  };

  const postOrderTraversal = (node: Node | null): number[] => {
    if (!node) return [];
    const result: number[] = [];
    result.push(...postOrderTraversal(node.left));
    result.push(...postOrderTraversal(node.right));
    result.push(node.value);
    return result;
  };

  const handlePreOrderTraversal = () => {
    const result = preOrderTraversal(root);
    alert(`Pré-Ordem: ${result.join(", ")}`);
  };

  const handleInOrderTraversal = () => {
    const result = inOrderTraversal(root);
    alert(`In-Ordem: ${result.join(", ")}`);
  };

  const handlePostOrderTraversal = () => {
    const result = postOrderTraversal(root);
    alert(`Pós-Ordem: ${result.join(", ")}`);
  };

  const renderTree = (node: Node | null, isRight: boolean): React.ReactNode => {
    if (!node) return null;

    const marginLeft = isRight ? "45px" : "0";
    const marginRight = isRight ? "0" : "45px";

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft, marginRight }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #fff",
            fontWeight: "bold",
            color: "#fff"
          }}
        >
          {node.value}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          {node.left && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowDownLeft style={{ color: "#fff", marginRight: "-5px" }} size={30} />
              </div>
              {renderTree(node.left, false)}
            </div>
          )}
          {node.right && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowDownRight style={{ color: "#383838", marginRight: "5px" }} size={30} />
              </div>
              {renderTree(node.right, true)}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Árvore:</h2>
      <button style={{ border: "none" }} onClick={handleAddNode}>Adicionar</button>
      {values.length >= 3 && (
        <div>
          <button onClick={handlePreOrderTraversal}>Pré-Ordem</button>
          <button onClick={handleInOrderTraversal}>In-Ordem</button>
          <button onClick={handlePostOrderTraversal}>Pós-Ordem</button>
        </div>
      )}
      <div>
        {renderTree(root, false)}
      </div>
    </div>
  );
};

const TreePage: React.FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "85%", height: "100%" }}>
      <div>
        <TreeAnimation />
      </div>
    </div>
  );
};

export default TreePage;
