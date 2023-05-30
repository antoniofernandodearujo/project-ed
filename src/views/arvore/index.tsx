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
  parentX: number;
  parentY: number;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level, isLeftChild, parentX, parentY }) => {
  const { value, left, right } = node;

  const treeContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    marginLeft: isLeftChild ? "20px" : "0",
    marginRight: !isLeftChild ? "20px" : "0",
  };

  const treeNodeStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "1px solid #000",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    marginBottom: "20px",
  };

  const lineStyle: React.CSSProperties = {
    position: "absolute",
    borderTop: "1px solid #000",
    left: `${parentX}px`,
    top: `${parentY}px`,
    width: isLeftChild ? "50%" : "calc(50% + 25px)",
    height: "50px",
  };

  return (
    <div style={treeContainerStyle}>
      {left && (
        <>
          <div style={lineStyle}></div>
          <TreeNode
            node={left}
            level={level + 1}
            isLeftChild
            parentX={parentX - (2 ** (4 - level)) * 25}
            parentY={parentY + 70}
          />
        </>
      )}
      <div style={treeNodeStyle}>{value}</div>
      {right && (
        <>
          <div style={lineStyle}></div>
          <TreeNode
            node={right}
            level={level + 1}
            isLeftChild={false}
            parentX={parentX + (2 ** (4 - level)) * 25}
            parentY={parentY + 70}
          />
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TreeNode node={root} level={1} isLeftChild={false} parentX={400} parentY={0} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreePage;
