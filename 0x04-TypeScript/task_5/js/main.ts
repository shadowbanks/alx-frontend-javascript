export interface MajorCredits{
    credits: number;
    key: 'major';
}

export interface MinorCredits{
    credits: number;
    key: 'minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    const sum = subject1.credits + subject2.credits;
    return {credits: sum, key: 'major'}
}

export function sumMinorCredits(subject1: MajorCredits, subject2:MajorCredits): MinorCredits{
    const sum = subject1.credits + subject2.credits;
    return {credits: sum, key: 'minor'}
}