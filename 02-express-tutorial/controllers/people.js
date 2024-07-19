let { people } = require("../data");
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" });
  }
  const newPerson = { id: people.length + 1, name };
  people.push(newPerson);
  res.status(201).json({ success: true, data: [...people] });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" });
  }
  const newPerson = { id: people.length + 1, name };
  people.push(newPerson);
  res.status(201).json({ success: true, data: [...people] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  try {
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` });
    }
    person.name = name;
    res.status(200).json({ success: true, data: person });
  } catch (error) {
    return res.status(200);
  }
};

const deletePerson = (req, res) => {
  const personId = Number(req.params.id);
  const person = people.find((person) => person.id === personId);
  
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  
  const newPeople = people.filter((person) => person.id !== personId);
  people = newPeople;
  
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
