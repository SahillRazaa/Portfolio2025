import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
`

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 400px;
  max-width: 90%;
`

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0a2540;
`

const Section = styled.div`
  margin-bottom: 1.2rem;
`

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`

const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`

const CancelBtn = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background:rgb(123, 123, 123);
  color: white;
  border-radius: 8px;
  cursor: pointer;
`

const CloseBtn = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #0467d5;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`

const FilterModal = ({ onClose, filters, setFilters }) => {
    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    const handleCancel = () => {
      setFilters({
        sortBy: 'recent',
        techType: 'all',
        difficulty: 'all',
      });
      onClose();
    };
  
    return (
      <ModalBackground>
        <Modal>
          <ModalTitle>Filter Projects</ModalTitle>
  
          <Section>
            <Label>Sort By</Label>
            <Select name="sortBy" value={filters.sortBy} onChange={handleChange}>
              <option value="recent">Recent</option>
              <option value="leastRecent">Least Recent</option>
              <option value="lengthy">Lengthy</option>
              <option value="quicky">Quicky</option>
            </Select>
          </Section>
  
          <Section>
            <Label>Project Type</Label>
            <Select name="techType" value={filters.techType} onChange={handleChange}>
              <option value="all">All</option>
              <option value="React">React</option>
              <option value="Flutter">Flutter</option>
              <option value="Python">Python</option>
            </Select>
          </Section>
  
          <Section>
            <Label>Difficulty</Label>
            <Select name="difficulty" value={filters.difficulty} onChange={handleChange}>
              <option value="all">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Select>
          </Section>
  
          <ButtonGroup>
            <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
            <CloseBtn onClick={onClose}>Apply Filters</CloseBtn>
          </ButtonGroup>
        </Modal>
      </ModalBackground>
    )
  }  

export default FilterModal
