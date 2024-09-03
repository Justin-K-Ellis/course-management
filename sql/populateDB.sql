-- Create tables
-- Instructors table
CREATE TABLE IF NOT EXISTS instructors (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    inst_name VARCHAR (100)
);

-- Create students DB
CREATE TABLE students (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    student_name VARCHAR (100)
);

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    course_name VARCHAR (100),
    instructor_id INTEGER REFERENCES instructors (id)
);

-- courses_students table
CREATE TABLE IF NOT EXISTS courses_students (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    course_id INTEGER REFERENCES courses (id),
    student_id INTEGER REFERENCES students (id)
);

----

-- Add data
-- Courses
INSERT INTO courses (course_name)
VALUES ('Programming 101'), ('Philosophy 101'), ('English as a Second Language'),
    ('Japanese 101'), ('Cosmology 101');

-- Instructors
INSERT INTO instructors (inst_name)
VALUES ('Bob Smith'), ('Naomi Suzuki'), ('Pat Shoemaker');

-- Students
INSERT INTO students (student_name)
VALUES ('Justin Klitgaard'), ('Tony Ciero'), ('Ryan Hicks'), ('Robin Hancock'), ('Mai Kasahara'), ('Maki Soyama'), ('Mouchan');

-- Assign instructors to courses
UPDATE courses
SET instructor_id = 1
WHERE id = 1;

UPDATE courses
SET instructor_id = 3 
WHERE id = 2;

UPDATE courses
SET instructor_id = 2
WHERE id = 3;

UPDATE courses
SET instructor_id = 2
WHERE id = 4;

UPDATE courses
SET instructor_id = 3
WHERE id = 5;

-- Assign students to courses;
-- Justin, programming
INSERT INTO courses_students (student_id, course_id)
VALUES (1, 1);

-- Justin, philosophy
INSERT INTO courses_students (student_id, course_id)
VALUES (1, 2);

-- Tony, philosophy
INSERT INTO courses_students (student_id, course_id)
VALUES (2, 2);

-- Tony, Japanese
INSERT INTO courses_students (student_id, course_id)
VALUES (2, 4);

-- Ryan, philosophy
INSERT INTO courses_students (student_id, course_id)
VALUES (3, 2);

-- Robin, Japanese
INSERT INTO courses_students (student_id, course_id)
VALUES (4, 4);

-- Robin, cosmology
INSERT INTO courses_students (student_id, course_id)
VALUES (4, 5);

-- Mai, ESL
INSERT INTO courses_students (student_id, course_id)
VALUES (5, 3);

-- Maki, ESL
INSERT INTO courses_students (student_id, course_id)
VALUES (6, 3);

-- Mouchan, philosophy
INSERT INTO courses_students (student_id, course_id)
VALUES (7, 2);

-- Mouchan, cosmology
INSERT INTO courses_students (student_id, course_id)
VALUES (7, 5);