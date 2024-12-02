"use client"

import { useState } from "react";
import React from "react";
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";

type projectData = {
    id:number,
    title:string,
    description:string,
    image:string,
    tag:string[],
    gitUrl:string,
    PreviewUrl:string
}

const projectData:projectData[] = [
    {
        id:1,
        title:"Project 1", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/1.jpeg", 
        tag: ["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:2,
        title:"Project 2", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/2.jpeg", 
        tag: ["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:3,
        title:"Project 3", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/3.jpeg", 
        tag: ["All", "Mobile"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:4,
        title:"Project 4", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/4.jpeg", 
        tag: ["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:5,
        title:"Project 5", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/5.jpeg", 
        tag: ["All", "Mobile"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:6,
        title:"Project 6", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/6.jpeg", 
        tag: ["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:7,
        title:"Project 7", 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quos.",
        image:"image/projects/7.jpeg",
        tag: ["All", "Mobile"],
        gitUrl:"/",
        PreviewUrl:"/" 
    }
];

export default function ProjectsSection() {

    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    )

    return (
        <section>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
{/*
                             ----OR---- 

                {["All", "Web", "Mobile"].map((tagName) => (
                    <ProjectTag
                        key={tagName}
                        onClick={handleTagChange}
                        name={tagName}
                        isSelected={tag === tagName}
                    />
                ))}


*/}
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => 
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        gitUrl={project.gitUrl}
                        PreviewUrl={project.PreviewUrl}/>
                )}
            </div>
        </section>
    );
}