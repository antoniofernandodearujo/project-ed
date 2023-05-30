import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Node {
  value: number;
  left?: Node | null;
  right?: Node | null;
}

interface TreeNodeProps {
  node: Node;
  level: number;
  isLeftChild?: boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level, isLeftChild }) => {
  const { value, left, right } = node;

  const treeNodeStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #000",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    marginBottom: "20px",
  };

  const treeContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const arrowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const levelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={treeContainerStyle}>
      {left && (
        <>
          <div style={levelStyle}>
            <div style={{ position: "relative" }}>
              <div style={treeNodeStyle}>{value}</div>
              <div style={{ width: "100px", height: "0", borderTop: "1px solid #000" }}></div>
            </div>
            <div style={arrowStyle}>
              <FaArrowLeft />
            </div>
          </div>
          <TreeNode node={left} level={level + 1} isLeftChild />
        </>
      )}
      {!left && (
        <div style={levelStyle}>
          <div style={treeNodeStyle}>{value}</div>
        </div>
      )}
      {right && (
        <>
          <div style={levelStyle}>
            <div style={arrowStyle}>
              <FaArrowRight />
            </div>
            <div style={{ position: "relative" }}>
              <div style={treeNodeStyle}>{value}</div>
              <div style={{ width: "100px", height: "0", borderTop: "1px solid #000" }}></div>
            </div>
          </div>
          <TreeNode node={right} level={level + 1} />
        </>
      )}
    </div>
  );
};

const TreePage: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [root, setRoot] = useState<Node | null>(null);

  const addNode = (node: Node | null, value: number): Node => {
    if (!node) {
      return { value };
    }

    if (value < node.value) {
      node.left = addNode(node.left, value);
    } else {
      node.right = addNode(node.right, value);
    }

    return node;
  };

  const handleAddNode = () => {
    setRoot((prevRoot) => addNode(prevRoot, value));
    setValue(0);
  };

  const preorderTraversal = (node: Node | null): number[] => {
    if (!node) {
      return [];
    }

    const result: number[] = [];

    result.push(node.value);
    result.push(...preorderTraversal(node.left));
    result.push(...preorderTraversal(node.right));

    return result;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div>
        <div>
          <label htmlFor="value">Digite um valor: </label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <button onClick={handleAddNode}>Adicionar</button>
        </div>

        {root && (
          <div>
            <h2>Árvore:</h2>
            <div>
              <TreeNode node={root} level={1} />
            </div>
          </div>
        )}

        {root && (
          <div>
            <h2>Percurso em Pré-Ordem:</h2>
            <ul>
              {preorderTraversal(root).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreePage;
