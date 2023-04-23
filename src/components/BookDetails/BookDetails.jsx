import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { Box } from "@mui/system";

const URL = "https://openlibrary.org/works/";

const BookDetails = ({id}) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function getBookDetails() {
      setLoading(true);

      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;

          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };

          setBook(newBook);
        } else {
          setBook(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box className="homeScreenModal">
      <div className="homeFilterContainer">
        <section className="book-details">
          <div className="container">
            <div className="book-details-content grid">
              <div className="book-details-img">
                <img src={book?.cover_img} alt="cover img" />
              </div>
              <div className="book-details-info">
                <div className="book-details-item title">
                  <span className="fw-6 fs-24">{book?.title}</span>
                </div>
                <div className="book-details-item description">
                  <span>{book?.description}</span>
                </div>
                <div className="book-details-item">
                  <span className="fw-6">Subject Places: </span>
                  <span className="text-italic">{book?.subject_places}</span>
                </div>
                <div className="book-details-item">
                  <span className="fw-6">Subject Times: </span>
                  <span className="text-italic">{book?.subject_times}</span>
                </div>
                <div className="book-details-item">
                  <span className="fw-6">Subjects: </span>
                  <span>{book?.subjects}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Box>
  );
};

export default BookDetails;
