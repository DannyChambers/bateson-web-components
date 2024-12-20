// --------------------------------------------
//
// Tabs
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Tabs.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface TabPanelProps {
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  children: React.ReactElement<TabPanelProps>[];
}

// --------------------------------------------
// TabPanel Component
// --------------------------------------------

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};

// --------------------------------------------
// Tabs Component
// --------------------------------------------

const Tabs: React.FC<TabsProps> & { Panel: React.FC<TabPanelProps> } = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      setActiveTab((index + 1) % children.length);
    } else if (e.key === "ArrowLeft") {
      setActiveTab((index - 1 + children.length) % children.length);
    }
  };

  return (
    <div data-component="Tabs" className={styles.tabs}>
      <div role="tablist" aria-label="Tabs" className={styles["tab-list"]}>
        {children.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={clsx(
              styles["tab-button"],
              activeTab === index && styles["tab-button--active"],
            )}
            onClick={() => setActiveTab(index)}
            onKeyDown={e => handleKeyDown(e, index)}
            tabIndex={activeTab === index ? 0 : -1}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {children.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          className={styles["tab-panel"]}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
};

Tabs.Panel = TabPanel;

// --------------------------------------------
// Export
// --------------------------------------------

export default Tabs;
