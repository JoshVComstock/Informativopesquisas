import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useModal } from "../hooks/useModal";


async function eliminarciudades(id) {
    const response = await fetch('http://127.0.0.1:8000/api/informacion' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    
    // si encuentra el dato muestra
    if (response.ok) {
        mostrarciudades();
      }
    }