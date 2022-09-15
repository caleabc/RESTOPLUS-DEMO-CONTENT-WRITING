// libraries
import { useState, useEffect } from "react";
import { Button, SIZE } from "baseui/button";

// components
import Spacer from "./spacer";

// css
import "./content.css";

function Content1() {
  return (
    <div className="main-div">
      <h1 className="application-name">
        Difference b/w Cloud Firestore and MongoDB
      </h1>

      <Spacer height="1rem" />

      <div>
        <p className="paragraph">
          In a high-level overview Cloud firestore is a database and MongoDB is
          also a database they are both the same, a database in the most general
          sense, is an organized collection of data. More specifically, a
          database is an electronic system that allows data to be easily
          accessed, manipulated and updated.
        </p>
        <p className="paragraph">
          In other words, a database is used by an organization as a method of
          storing, managing and retrieving information. Modern databases are
          managed using a database management system (DBMS).
        </p>

        <p className="heading">Firestore</p>
        <p className="paragraph">
          Firestore, a cloud-hosted NoSQL database that applications can access
          and use to store or sync data with. It is a good database that was
          created for faster queries and better scalability than the realtime
          database. NoSQL is a non-tabular database that stores data in objects
          and documents. NoSQL databases store unstructured data. Cloud
          Firestore provides developers the ability to add real-time listeners
          to the database. This means that we can get any changes that happen in
          the database.
        </p>

        <p className="heading">MongoDB</p>
        <p className="paragraph">
          MongoDB is a document-oriented NoSQL database used for high volume
          data storage. Instead of using tables and rows as in the traditional
          relational databases, MongoDB makes use of collections and documents.
          Documents consist of key-value pairs which are the basic unit of data
          in MongoDB. Collections contain sets of documents and function which
          is the equivalent of relational database tables. MongoDB is a database
          which came into light around the mid-2000s.
        </p>

        <p className="heading">In Conclusion</p>
        <p className="paragraph">
          Both MongoDB and Firestore are fantastic tools for web application
          development. If you’re looking for a full back-end as a service and
          the least possible effort, Firestore is ideal, MongoDB on the other
          hand gives you the most powerful and flexible platform for application
          development, and the ability to support both transactional and
          warehouse-style workloads in the same system.
        </p>
      </div>
    </div>
  );
}

export default Content1;
